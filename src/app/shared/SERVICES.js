import groomingImg  from '../assets/img/grooming.jpg';
import sleepoverImg from '../assets/img/sleepover.jpg';
import trainingImg from '../assets/img/training.jpg';
import daycareImg from '../assets/img/daycare.jpg';

export const SERVICES = [
    {
        id: 0,
        name: 'Daycare',
        image: daycareImg,
        description:
            'We provide a safe and comfy atmosphere for your pet to play and socialize with lots of new canine friends every day. We are Disney for dogs!'
    },
    {
        id: 1,
        name: 'Sleepovers',
        image: sleepoverImg,
        description:
            'Going out of town? Have a vacation planned soon? We offer a homelike and cage-less atmosphere (unlike a traditional kennel) with TLC by the boat load.'
    },
    {
        id: 2,
        name: 'Grooming',
        image: groomingImg,
        description:
            'Our Barker Shop offers full service grooming 5 days a week to keep your best friend looking and feeling his best. See what everyone is barking about!'
    },
    {
        id: 3,
        name: 'Training',
        image: trainingImg,
        description:
            'Behavior problems? Dog thinks he or she runs the house? Is he the boss of you? We can fix all that and more AND it is fun for you and the whole family!'
    }
];
