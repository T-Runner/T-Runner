import { v4 as uuidv4 } from 'uuid';

export const workout_summary = [
    {
        date: "THURSDAY, SEPTEMBER 1ST,2022",
        time: "7:06 PM",
        sit: "SIT1",
        title: "MATT",
        type: "GTT CLASS LIVE 50",
        metric: {
            heart: 1,
            otf: 2,
        }
    },
    {
        date: "MONDAY, SEPTEMBER 1ST,2022",
        time: "10:09 PM",
        sit: "SIT7",
        title: "MATT",
        type: "GTT CLASS LIVE 60",
        metric: {
            heart: 10,
            otf: 4,
        }
    },
    {
        date: "THURSDAY, SEPTEMBER 1ST,2022",
        time: "10:09 PM",
        sit: "SIT9",
        title: "MATT",
        type: "GTT CLASS LIVE 90",
        metric: {
            heart: 90,
            otf: 100,
        }
    },
    {
        date: "WEDNESDAY, SEPTEMBER 1ST,2022",
        time: "08:09 PM",
        sit: "SIT1",
        title: "MATT",
        type: "GTT CLASS LIVE 30",
        metric: {
            heart: 100,
            otf: 20,
        }
    },
    {
        date: "SUNDAY, SEPTEMBER 1ST,2022",
        time: "10:09 PM",
        sit: "SIT10",
        title: "MATT",
        type: "GTT CLASS LIVE 160",
        metric: {
            heart: 10,
            otf: 200,
        }
    },
]


export const lst_post = [
    {
        name: 'Phan Tuan Anh',
        time: 'October 11, 2022 at 5:58 PM ',
        location: 'Quận Gò Vấp, Ho Chi Minh City',
        session: 'AFTERNOON',
        avatar: 'data:image/png;base64,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',
        className: "CHẠY BỘ 5 PHÚT"
    },
    {
        name: 'Vu Hoang Phat',
        time: 'October 12, 2022 at 9:00 AM ',
        location: 'Quận Tân Bình, Ho Chi Minh City',
        session: 'MORNING',
        avatar: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
        className: "CHẠY BỘ 10 PHÚT"
    },
    {
        name: 'Nguyen Hong Quang',
        time: 'October 14, 2022 at 9:00 AM ',
        location: 'Quận 12, Ho Chi Minh City',
        session: 'MORNING',
        avatar: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
        className: "CHẠY BỘ 15 PHÚT"
    },
    {
        name: 'John',
        time: 'October 10, 2022 at 7:00 PM ',
        location: 'Quận 12, Ho Chi Minh City',
        session: 'EVENING',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&usqp=CAU',
        className: "CHẠY BỘ 25 PHÚT"
    },
    {
        name: 'Thang Huynh',
        time: 'October 10, 2022 at 7:00 AM ',
        location: 'Quận 9, Vinhome ,Ho Chi Minh City',
        session: 'MORNING',
        avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/13ad59a659fd650c1c3a1d9ed9fcb3dc-1557717594956/db92b6b4-32fb-484b-99c7-67a7136de103.jpg',
        className: "CHẠY BỘ 30 PHÚT"
    },
]

export const classes = {
    run: [
        {
            name: '30-Minute Ladder Workout',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Phát',
            date: '20/11/2022',
            time: '06:45 AM',
            duration: '30 Minutes',
            detail: [
                "Warm-up: 5 minutes of easy jogging", "Work interval: 20 minutes at marathon pace", "Recovery interval: 1 minute at easy pace", "Cool down: 5 minutes easy jogging"
            ],
            classId: uuidv4()
        },
        {
            name: '30-Minute Run and Strength Combo Workout',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Quang',
            date: '21/11/2022',
            time: '07:45 AM',
            duration: '30 Minutes',
            detail: [
                "CWarm-up: 5-minute easy jog", "Run interval: 10 minute at 5K pace", "Strength interval: 10 minute squats", "Cool down: 5-minute easy jog"
            ],
            classId: uuidv4()
        },
        {
            name: '60-Minute Sprint Interval Workout',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '09:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: '60-Minute Run and Strength Combo Workout',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '16/12/2022',
            time: '10:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        }
    ],
    ride: [
        {
            name: '60-Minute Sprint Interval Workout',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Phát',
            date: '20/11/2022',
            time: '06:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'MEDIUM DISTANCE ROWING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Quang',
            date: '21/11/2022',
            time: '07:45 AM',
            duration: '30 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'LONG DISTANCE ROWING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '09:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'SUPER LONG DISTANCE ROWING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '10:30 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        }
    ],
    walk: [
        {
            name: 'SHORT WALKING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Phát',
            date: '20/11/2022',
            time: '06:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'MID WALKING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Quang',
            date: '21/11/2022',
            time: '07:45 AM',
            duration: '30 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'LONG WALKING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '09:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'SUPER LONG WALKING',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '10:30 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        }
    ],
    hike: [
        {
            name: 'LONG HIKE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Phát',
            date: '20/11/2022',
            time: '06:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'MID HIKE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Quang',
            date: '21/11/2022',
            time: '07:45 AM',
            duration: '30 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'LONG HIKE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '09:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'SUPER LONG HIKE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '10:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        }
    ],
    distance: [
        {
            name: 'RUN COORDINARY WITH MANY DISTANCES',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Phát',
            date: '20/11/2022',
            time: '06:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'RUN COORDINARY',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'Quang',
            date: '21/11/2022',
            time: '07:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'RUN COORDINARY LONG DISTANCE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '09:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        },
        {
            name: 'RUN COORDINARY SUPER LONG DISTANCE',
            avatar: 'https://play-lh.googleusercontent.com/bF4XlileDVnh-FNUc0iQSKeJJ6XBYxyBHALfhQJ4bVcU8yVBO0jP6f5YMVsdNuy1420',
            coach_name: 'John',
            date: '22/11/2022',
            time: '10:45 AM',
            duration: '60 Minutes',
            detail: [
                "Slow Tempo Squat with Row - 5 Minute", "Slow Tempo Deep Squat - 55 Minute"
            ],
            classId: uuidv4()
        }
    ],
}