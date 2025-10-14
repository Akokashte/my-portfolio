import { toast } from "react-toastify"

const openGitHubLink = () => {
    window.open("https://github.com/Akokashte", "_blank")
}

const openInstagramLink = () => {
    // window.open("https://www.instagram.com/kashteankit", "_blank")
    toast("Not available")
}

const openFacebookLink = () => {
    // window.open("#", "_blank")
}

const openLinkedinLink = () => {
    window.open("https://in.linkedin.com/in/ankitkashte", "_blank")
}

const socialMediaIconLinks = {
    instagramIconLink: "https://res.cloudinary.com/dy2inzope/image/upload/v1727348366/fyh3m1dg1yxucnzf4rcf.webp",
    githubIconLink: "https://res.cloudinary.com/dy2inzope/image/upload/v1727348358/xaza27fy6zouxjq43v0l.webp",
    linkedinIconLink: "https://res.cloudinary.com/dy2inzope/image/upload/v1727348336/qhrduwqcxfedvxrxvk26.webp",
    facebookIconLink: "https://res.cloudinary.com/dy2inzope/image/upload/v1727349094/njkibua34amgbqk4uqxx.webp",

    mylogoLink: "https://res.cloudinary.com/dy2inzope/image/upload/v1723015883/bon4b4k7ulg9g4qmg9tn.webp",
}

export {
    openGitHubLink,
    openInstagramLink,
    openLinkedinLink,
    openFacebookLink,
    socialMediaIconLinks
}