let allInput = document.querySelectorAll('input')

// allInput.forEach((input) => {
//     // console.log(input);
//     input.addEventListener('keyup', () => {
//         if (input.value.trim().length >= 1) {
//             console.log(input.className);
//             input.classList.add('green')
//         }
//     })
// })


for (let i = 0; i < allInput.length; i++) {
    //   console.log(allInput[i]);
    console.log(allInput);
    allInput[i].addEventListener('keyup', () => {
        if (allInput[i].value.trim().length >= 2) {
            console.log(allInput[i].className);
            allInput[i].classList.add('green')
        } else if (allInput[1].value.trim().length >= 1) {
            console.log('he');
        }
    })

}

function examination() {
    // grab our DOM elements

    let feed_back = document.querySelector('#feed_back')
    let math_score = document.querySelector('#math_score').value
    let english_score = document.querySelector('#english_score').value
    let computer_score = document.querySelector('#computer_score').value


    let course1_score = document.querySelector('#course1').value
    let course2_score = document.querySelector('#course2').value

    let post_utme = document.querySelector('#post_utme').value
    let jamb_score = document.querySelector('#jamb_score').value
    let region_user = document.querySelector('#region_user').value

    let sittings = document.querySelector('#sittings').value

    let name = document.querySelector('#name').value

    // convert variables to number

    let math = Number(math_score);
    let english = Number(english_score);
    let computer = Number(computer_score);

    let course1 = Number(course1_score);
    let course2 = Number(course2_score);


    let pUtme = Number(post_utme); //over 20

    let jambScore = Number(jamb_score); //over 400

    let userRegion = region_user;

    let jambScoreValue = jambScore / 8;

    let oLevel = [math, english, computer, course1, course2]; //array of subjects

    let oneSittings = Number(sittings); //only one sit

    let toggleRegion = false;

    let regions = ["Edo", "Niger", "South", "Osun"];


    ////+++++========= OUR LOGICS -===========++++++++//


    // ==== get olevels total score of all subjects ===/
    const oLevelScore = oLevel.reduce((olevelSubjects, value) => {
        return olevelSubjects + value;
    });

    //===== calculate all scores from all exams ======//
    let meritScore = Math.round((oLevelScore / 50) * 30) + jambScoreValue + pUtme;


    //==== checking region ====//
    regions.forEach((region) => {

        if (userRegion.includes(region)) {
            toggleRegion = true;
        }

    });

    //=== all the logic to calculate the user end result ====/
    this.verify = function () {

        if (oneSittings > 1) {
            return feed_back.innerHTML = "You have instantly failed";
        }
        if (meritScore >= 75 || meritScore === 80) {
            return feed_back.innerHTML = "Merit"
        }
        else if (meritScore >= 65 || meritScore === 74 && toggleRegion === true) {
            return feed_back.innerHTML = "catchement"
        }
        if (meritScore >= 60 || meritScore === 64) {
            return feed_back.innerHTML = "CONCENSIONARY"
        } else {
            return feed_back.innerHTML = "disqualified"
        }
    };
}

document.querySelector('#calculate').addEventListener('click', () => {
    const person = new examination();
    person.verify()
    let overlay = document.querySelector('.overlay')
    overlay.classList.remove('hide')
})