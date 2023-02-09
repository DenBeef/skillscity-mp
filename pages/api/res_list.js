export default function handler(req, res) {

    const resList = [

        {
            id: 1,
            title: "CS50's Introduction to Computer Science",
            author: "David J. Malan",
            link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19339199037&utm_medium=cpc&utm_term=harvard%20cs50%20online&hsa_acc=7245054034&hsa_cam=19339199037&hsa_grp=145482383700&hsa_ad=642397268536&hsa_src=g&hsa_tgt=kwd-422823376443&hsa_kw=harvard%20cs50%20online&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAleOeBhBdEiwAfgmXfxmOOSaE3ZZc_e8tzZyp5RAQteOmKqE20VsLHe9stEuoDMAAOTTzFxoCzpQQAvD_BwE",
            image: "https://camo.githubusercontent.com/e102fc78838d08dc4d36cec7006a3cf89cbd397892588b6ed16d33af0f374255/68747470733a2f2f676f6f2e676c2f6d4a774e5543"
        },

        {
            id: 2,
            title: "W3 SCHOOL",
            author: "Refsnes Data",
            link: "https://www.w3schools.com/",
            image: "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 3,
            title: "FreeCodeCamp",
            author: "Quincy Larson",
            link: "https://www.freecodecamp.org/",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--MYZ584sb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg"
        },


    ];

    res.json(resList);

}