import fire
import docker
import os
from dotenv import load_dotenv
from shutil import copyfile
from rich.console import Console
from rich.syntax import Syntax

class Kit(object):
  def __init__(self):
    self.dockerClient = docker.from_env()
    self.c = Console()
    self.cwd = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
    # Step 1 copy env
    self.c.print(":one:   copy env.example to .env", style="bold red")
    copy_env_file = "cp env.example .env"
    syntax = Syntax(copy_env_file, "shell", theme="monokai", line_numbers=False)
    destination = os.path.join(self.cwd,'.env')
    if not os.path.exists(destination):
      source = os.path.join(self.cwd, 'env.example')
      copyfile(source, destination)
    load_dotenv(os.path.join(self.cwd,'.env'))

  def update(self):
    DATA_PATH_HOST = os.path.expanduser(os.getenv('DATA_PATH_HOST'))
    DEPLOYMENT_ENV = os.getenv('DEPLOYMENT_ENV')
    # Step 2 Create data folder
    # De create grafana/data duoi tai khoan hien tai
    self.c.print(":two:   create data folder", style="bold red")
    data_path = os.path.join(DATA_PATH_HOST,'grafana/data')
    os.makedirs(data_path, exist_ok=True)
    data_path = os.path.join(DATA_PATH_HOST,'pmm-client/srv/logs')
    os.makedirs(data_path, exist_ok=True)
    data_path = os.path.join(DATA_PATH_HOST,'pmm-server/srv/logs')
    os.makedirs(data_path, exist_ok=True)
    data_path = os.path.join(DATA_PATH_HOST,'prometheus')
    os.makedirs(data_path, exist_ok=True)
    # Step 3 Create Network reverse-proxy
    network = "reverse-proxy-%s" % DEPLOYMENT_ENV
    docker_network_create = "docker network create --driver bridge %s" % network
    syntax = Syntax(docker_network_create, "shell", theme="monokai", line_numbers=False)
    self.c.print(":three:   create network proxy", style="bold red")
    self.c.print(syntax)
    list_of_networks = self.dockerClient.networks.list(names=[network])
    if len(list_of_networks) == 0:
      try:
        self.dockerClient.networks.create(network, driver="bridge", check_duplicate=True)
      except docker.errors.APIError as err:
        self.c.print("Docker create network error: {0}".format(err))

  def hello(name="World"):
    return "Hello %s!" % name

if __name__ == '__main__':
  fire.Fire(Kit)
