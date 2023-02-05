terraform {  #https://registry.terraform.io/providers/hashicorp/azurerm/latest
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.30.0"
    }
  }
}

provider "azurerm" {
  # Configuration options
  # 1. go to Portal and create App Registration, say terraform
  # 2. grand permission for terraform App Registration to create Azure resources
        # 2.1 select subscription => IAM => Add role Assignment => select built-in role Contributor
  subscription_id = "d21b5a086baf-40c4-40c4-8610-d21b5a086baf"
  tenant_id = "d21b5a086baf-40c4-40c4-40c4-d21b5a086baf" # App Registration's Directory(tenant) ID
  client_id = "d21b5a086baf-40c4-40c4-40c4-d21b5a086baf" #generate a App Registration
  client_secret = "cSQ8Q~y-5x-wgZ2~d21b5a086baf~d21b5a086baf-H" #go to the specific App Registration and generate new secrets using Certificates & Secrets
  features { # no need any features for now
  }
}

#https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group 
  # remember to choose the right version which is defined in provider section above
resource "azurerm_resource_group" "createresourcegroup" {
  name     = "rgreactjs"
  location = "East Asia"
}

resource "azurerm_static_site" "swa" {
  name                = "ReactJS"
  resource_group_name = azurerm_resource_group.createresourcegroup.name
  location            = azurerm_resource_group.createresourcegroup.location
  sku_tier = "Free"
  depends_on = [
    azurerm_resource_group.createresourcegroup
  ]
}
