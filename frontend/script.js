// =====================================================
// STUDENT PERFORMANCE PREDICTION
// CLEAN FRONTEND SCRIPT
// =====================================================

// =========================================
// PAGE TRANSITION ANIMATION
// =========================================

function animateScreen(screen) {

    if (!screen) return;

    screen.classList.remove("page-enter");

    // Force the browser to restart the animation
    void screen.offsetWidth;

    screen.classList.add("page-enter");
}

// =====================================================
// ELEMENTS
// =====================================================

// Intro
const startButton = document.getElementById("startButton");
const introScreen = document.getElementById("introScreen");

// Chapter 1
const chapterOne = document.getElementById("chapterOne");
const ageOptions = document.querySelectorAll(".age-option");
const continueButton = document.getElementById("continueButton");

// Chapter 2
const chapterTwo = document.getElementById("chapterTwo");
const studyOptions = document.querySelectorAll(".study-option");
const studyContinue = document.getElementById("studyContinue");



// Failures
const failuresQuestion = document.getElementById("failuresQuestion");
const failuresContinue = document.getElementById("failuresContinue");
const failuresValue = document.getElementById("failuresValue");
const decreaseFailures = document.getElementById("decreaseFailures");
const increaseFailures = document.getElementById("increaseFailures");

// Absences
const absencesQuestion = document.getElementById("absencesQuestion");
const absencesContinue = document.getElementById("absencesContinue");
const absenceSlider = document.getElementById("absenceSlider");
const absenceValue = document.getElementById("absenceValue");

// Chapter 3 — Going out
const chapterThree = document.getElementById("chapterThree");
const gooutOptions = document.querySelectorAll(".goout-option");
const gooutContinue = document.getElementById("gooutContinue");

// Free time
const freetimeQuestion = document.getElementById("freetimeQuestion");
const freetimeOptions = document.querySelectorAll(".freetime-option");
const freetimeContinue = document.getElementById("freetimeContinue");

// Little things
const lifestyleQuestion = document.getElementById("lifestyleQuestion");
const lifestyleContinue = document.getElementById("lifestyleContinue");
const binaryOptions = document.querySelectorAll(".binary-option");
const healthOptions = document.querySelectorAll(".health-option");

// Alcohol
const alcoholQuestion = document.getElementById("alcoholQuestion");
const alcoholContinue = document.getElementById("alcoholContinue");
const alcoholOptions = document.querySelectorAll(".alcohol-option");

// Chapter 4 — About you
const aboutYouQuestion = document.getElementById("aboutYouQuestion");
const aboutYouContinue = document.getElementById("aboutYouContinue");
const profileOptions = document.querySelectorAll(".profile-option");

// Chapter 4 — Support
const supportQuestion = document.getElementById("supportQuestion");
const supportContinue = document.getElementById("supportContinue");
const supportOptions = document.querySelectorAll(".support-option");

// Chapter 4 — Background
const backgroundQuestion = document.getElementById("backgroundQuestion");
const backgroundContinue = document.getElementById("backgroundContinue");

const educationOptions =
    document.querySelectorAll(".education-option");

const backgroundOptions =
    document.querySelectorAll(".background-option");

const travelOptions =
    document.querySelectorAll(".travel-option");

const motherJob =
    document.getElementById("motherJob");

const fatherJob =
    document.getElementById("fatherJob");

    const famrelOptions =
    document.querySelectorAll(".famrel-option");


const whatIfStudySlider =
    document.getElementById("whatIfStudySlider");

const whatIfStudyLabel =
    document.getElementById("whatIfStudyLabel");

const currentPrediction =
    document.getElementById("currentPrediction");

const whatIfPrediction =
    document.getElementById("whatIfPrediction");



    //
    


// =====================================================
// STUDENT DATA
// =====================================================

let studentData = {};

function animateScreen(screen) {
    screen.classList.remove("page-enter");

    // Force the browser to restart the animation
    void screen.offsetWidth;

    screen.classList.add("page-enter");
}


// =====================================================
// START JOURNEY
// =====================================================
if (startButton) {

    startButton.addEventListener("click", () => {

        introScreen.style.display = "none";
        chapterOne.style.display = "flex";

        animateScreen(chapterOne);

    });

}

// =====================================================
// CHAPTER 1 — AGE
// =====================================================

ageOptions.forEach(option => {

    option.addEventListener("click", () => {

        ageOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.age =
            Number(option.dataset.age);

        continueButton.disabled = false;

        console.log("Student data:", studentData);

    });

});


// Chapter 1 → Chapter 2
continueButton.addEventListener("click", () => {

    console.log("Continue clicked");

    chapterOne.style.display = "none";

    chapterTwo.style.display = "flex";

    animateScreen(chapterTwo);

});


// =====================================================
// CHAPTER 2 — STUDY TIME
// =====================================================

studyOptions.forEach(option => {

    option.addEventListener("click", () => {

        studyOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.studytime =
            Number(option.dataset.studytime);

        studyContinue.disabled = false;

        console.log("Student data:", studentData);

    });

});


// Study time → Failures

studyContinue.addEventListener("click", () => {

    chapterTwo.style.display = "none";

    failuresQuestion.style.display = "flex";

    animateScreen(failuresQuestion);

});
// =====================================================
// FAILURES
// =====================================================

let failures = 0;

studentData.failures = 0;


function updateFailures(value) {

    // Dataset allows 0–3
    if (value < 0 || value > 3) {
        return;
    }

    failures = value;

    studentData.failures = failures;

    failuresValue.textContent = failures;

    failuresValue.style.transform = "scale(1.15)";

    setTimeout(() => {
        failuresValue.style.transform = "scale(1)";
    }, 150);

    console.log("Student data:", studentData);

}


decreaseFailures.addEventListener("click", () => {

    updateFailures(failures - 1);

});


increaseFailures.addEventListener("click", () => {

    updateFailures(failures + 1);

});


// Failures → Absences
failuresContinue.addEventListener("click", () => {

    failuresQuestion.style.display = "none";

    absencesQuestion.style.display = "flex";

    animateScreen(absencesQuestion);

});

// =====================================================
// ABSENCES
// =====================================================

// 0 is a valid value
studentData.absences = 0;


absenceSlider.addEventListener("input", () => {

    const value =
        Number(absenceSlider.value);

    absenceValue.textContent = value;

    studentData.absences = value;

    absenceValue.style.transform = "scale(1.08)";

    setTimeout(() => {
        absenceValue.style.transform = "scale(1)";
    }, 100);

    console.log("Student data:", studentData);

});


// Absences → Chapter 3

absencesContinue.addEventListener("click", () => {

    absencesQuestion.style.display = "none";

    chapterThree.style.display = "flex";

    animateScreen(chapterThree);

});
// =====================================================
// CHAPTER 3 — GOING OUT
// =====================================================

gooutOptions.forEach(option => {

    option.addEventListener("click", () => {

        gooutOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.goout =
            Number(option.dataset.goout);

        gooutContinue.disabled = false;

        console.log("Student data:", studentData);

    });

});


// Going out → Free time

gooutContinue.addEventListener("click", () => {

    chapterThree.style.display = "none";

    freetimeQuestion.style.display = "flex";

    animateScreen(freetimeQuestion);

});

// =====================================================
// FREE TIME
// =====================================================

freetimeOptions.forEach(option => {

    option.addEventListener("click", () => {

        freetimeOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.freetime =
            Number(option.dataset.freetime);

        freetimeContinue.disabled = false;

        console.log("Student data:", studentData);

    });

});


// Free time → Little things

freetimeContinue.addEventListener("click", () => {

    freetimeQuestion.style.display = "none";

    lifestyleQuestion.style.display = "flex";

    animateScreen(lifestyleQuestion);

});

// =====================================================
// CHAPTER 3 — LITTLE THINGS
// =====================================================

const lifestyleCompleted = {

    activities: false,
    romantic: false,
    health: false

};


// Yes / No questions

binaryOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field =
            option.dataset.field;

        const value =
            option.dataset.value;


        // Remove selection from
        // same question only

        document
            .querySelectorAll(
                `.binary-option[data-field="${field}"]`
            )
            .forEach(item => {

                item.classList.remove("selected");

            });


        option.classList.add("selected");


        // Save value

        studentData[field] =
            value === "yes" ? "yes" : "no";


        lifestyleCompleted[field] = true;


        checkLifestyleComplete();


        console.log(
            "Student data:",
            studentData
        );

    });

});


// Health

healthOptions.forEach(option => {

    option.addEventListener("click", () => {

        healthOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.health =
            Number(option.dataset.health);

        lifestyleCompleted.health = true;

        checkLifestyleComplete();

        console.log(
            "Student data:",
            studentData
        );

    });

});


function checkLifestyleComplete() {

    const complete =
        lifestyleCompleted.activities &&
        lifestyleCompleted.romantic &&
        lifestyleCompleted.health;

    lifestyleContinue.disabled = !complete;

}


// Little things → Alcohol

lifestyleContinue.addEventListener("click", () => {

    lifestyleQuestion.style.display = "none";

    alcoholQuestion.style.display = "flex";

    animateScreen(alcoholQuestion);

});

// =====================================================
// ALCOHOL
// =====================================================

const alcoholCompleted = {

    Dalc: false,
    Walc: false

};


alcoholOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field =
            option.dataset.field;

        const value =
            Number(option.dataset.value);


        // Remove selection from
        // same row

        document
            .querySelectorAll(
                `.alcohol-option[data-field="${field}"]`
            )
            .forEach(item => {

                item.classList.remove("selected");

            });


        option.classList.add("selected");


        studentData[field] = value;

        alcoholCompleted[field] = true;

        checkAlcoholComplete();


        console.log(
            "Student data:",
            studentData
        );

    });

});


function checkAlcoholComplete() {

    const complete =
        alcoholCompleted.Dalc &&
        alcoholCompleted.Walc;

    alcoholContinue.disabled = !complete;

}


// Alcohol → Chapter 4

alcoholContinue.addEventListener("click", () => {

    alcoholQuestion.style.display = "none";

    aboutYouQuestion.style.display = "flex";

    animateScreen(aboutYouQuestion);

});

// =====================================================
// CHAPTER 4 — ABOUT YOU
// =====================================================

const profileCompleted = {

    
    sex: false,
    address: false,
    famsize: false,
    Pstatus: false

};


profileOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field =
            option.dataset.field;

        const value =
            option.dataset.value;


        // Deselect only same question

        document
            .querySelectorAll(
                `.profile-option[data-field="${field}"]`
            )
            .forEach(item => {

                item.classList.remove("selected");

            });


        option.classList.add("selected");


        studentData[field] = value;

        profileCompleted[field] = true;

        checkProfileComplete();


        console.log(
            "Student data:",
            studentData
        );

    });

});

function checkProfileComplete() {

    const complete =
        profileCompleted.sex &&
        profileCompleted.address &&
        profileCompleted.famsize &&
        profileCompleted.Pstatus;

    aboutYouContinue.disabled = !complete;

}

// About you → Support

aboutYouContinue.addEventListener("click", () => {

    console.log("Moving from About You to Support System");

    aboutYouQuestion.style.display = "none";

    if (supportQuestion) {

        supportQuestion.style.display = "flex";

        // Animate the new screen
        animateScreen(supportQuestion);

    } else {

        console.error(
            "ERROR: supportQuestion section was not found."
        );

    }

});

// =====================================================
// CHAPTER 4 — SUPPORT SYSTEM
// =====================================================

const supportCompleted = {

    schoolsup: false,
    famsup: false,
    paid: false,
    internet: false,
    higher: false

};


supportOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field =
            option.dataset.field;

        const value =
            option.dataset.value;


        // Deselect same question

        document
            .querySelectorAll(
                `.support-option[data-field="${field}"]`
            )
            .forEach(item => {

                item.classList.remove("selected");

            });


        option.classList.add("selected");


        studentData[field] =
            value === "yes" ? "yes" : "no";


        supportCompleted[field] = true;


        checkSupportComplete();


        console.log(
            "Student data:",
            studentData
        );

    });

});


function checkSupportComplete() {

    const complete =
        supportCompleted.schoolsup &&
        supportCompleted.famsup &&
        supportCompleted.paid &&
        supportCompleted.internet &&
        supportCompleted.higher;

    supportContinue.disabled = !complete;

}


// Support → Background

supportContinue.addEventListener("click", () => {

    supportQuestion.style.display = "none";
    backgroundQuestion.style.display = "flex";

});


// =====================================================
// CHAPTER 4 — BACKGROUND
// =====================================================

const backgroundCompleted = {

    Medu: false,
    Fedu: false,
    Mjob: false,
    Fjob: false,
    famrel: false,
    guardian: false,
    reason: false,
    nursery: false,
    traveltime: false

};

famrelOptions.forEach(option => {

    option.addEventListener("click", () => {

        famrelOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.famrel =
            Number(option.dataset.famrel);

        backgroundCompleted.famrel = true;

        checkBackgroundComplete();

        console.log("Student data:", studentData);

    });

});
// =====================================================
// SUPPORT → BACKGROUND
// =====================================================

supportContinue.addEventListener("click", () => {

    supportQuestion.style.display = "none";

    backgroundQuestion.style.display = "flex";

});


// =====================================================
// PARENT EDUCATION
// =====================================================

educationOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field = option.dataset.field;
        const value = Number(option.dataset.value);

        document
            .querySelectorAll(
                `.education-option[data-field="${field}"]`
            )
            .forEach(item => {
                item.classList.remove("selected");
            });

        option.classList.add("selected");

        studentData[field] = value;

        backgroundCompleted[field] = true;

        checkBackgroundComplete();

    });

});


// =====================================================
// PARENT JOBS
// =====================================================

motherJob.addEventListener("change", () => {

    if (motherJob.value === "") return;

    studentData.Mjob = motherJob.value;

    backgroundCompleted.Mjob = true;

    checkBackgroundComplete();

});


fatherJob.addEventListener("change", () => {

    if (fatherJob.value === "") return;

    studentData.Fjob = fatherJob.value;

    backgroundCompleted.Fjob = true;

    checkBackgroundComplete();

});


// =====================================================
// GUARDIAN / REASON / NURSERY
// =====================================================

backgroundOptions.forEach(option => {

    option.addEventListener("click", () => {

        const field = option.dataset.field;
        const value = option.dataset.value;

        document
            .querySelectorAll(
                `.background-option[data-field="${field}"]`
            )
            .forEach(item => {
                item.classList.remove("selected");
            });

        option.classList.add("selected");

        studentData[field] = value;

        backgroundCompleted[field] = true;

        checkBackgroundComplete();

    });

});


// =====================================================
// TRAVEL TIME
// =====================================================

travelOptions.forEach(option => {

    option.addEventListener("click", () => {

        travelOptions.forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        studentData.traveltime =
            Number(option.dataset.traveltime);

        backgroundCompleted.traveltime = true;

        checkBackgroundComplete();

    });

});


// =====================================================
// CHECK COMPLETION
// =====================================================

function checkBackgroundComplete() {

   const complete =
    backgroundCompleted.Medu &&
    backgroundCompleted.Fedu &&
    backgroundCompleted.Mjob &&
    backgroundCompleted.Fjob &&
    backgroundCompleted.famrel &&
    backgroundCompleted.guardian &&
    backgroundCompleted.reason &&
    backgroundCompleted.nursery &&
    backgroundCompleted.traveltime;

    backgroundContinue.disabled = !complete;

}


// =====================================================
// FINAL BUTTON
// =====================================================

backgroundContinue.addEventListener("click", async () => {

    console.log("Sending student data:", studentData);

    backgroundContinue.disabled = true;
    backgroundContinue.textContent = "Reading your story...";


    try {

        const response = await fetch("https://learnora-student-performance-analytics.onrender.com/predict", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(studentData)
            }
        );


        if (!response.ok) {

            throw new Error(
                `Server error: ${response.status}`
            );

        }


        const result = await response.json();
        studentData.prediction = result.predicted_final_grade;

        // Initialize What-If section with the student's actual study time
if (whatIfStudySlider) {

    whatIfStudySlider.value = studentData.studytime;

    whatIfStudyLabel.textContent =
        getStudyTimeLabel(studentData.studytime);

    currentPrediction.textContent =
        Number(studentData.prediction).toFixed(2);

    whatIfPrediction.textContent =
        Number(studentData.prediction).toFixed(2);
}

        const insightsContainer =
    document.getElementById("modelInsights");

insightsContainer.innerHTML = "";

result.model_insights.forEach(item => {

    const percentage =
        (item.importance * 100).toFixed(1);

    const insightItem =
        document.createElement("div");

    insightItem.className = "insight-item";

    insightItem.innerHTML = `
        <div class="insight-header">

            <span class="insight-name">
                ${formatFeatureName(item.feature)}
            </span>

            <span class="insight-percent">
                ${percentage}%
            </span>

        </div>

        <div class="insight-track">

            <div
                class="insight-bar"
                style="width: ${percentage}%">
            </div>

        </div>
    `;

    insightsContainer.appendChild(insightItem);
});

        console.log("Prediction received:", result);


        // Save prediction
        studentData.prediction =
            result.predicted_final_grade;


        // Hide questionnaire
        backgroundQuestion.style.display = "none";


        // Show result screen
        showResult(result.predicted_final_grade);


    } catch (error) {

        console.error(
            "Prediction error:",
            error
        );

        alert(
            "Something went wrong while getting your prediction. Please try again."
        );

        backgroundContinue.disabled = false;

        backgroundContinue.textContent =
            "See my result →";

    }

});

// =================================
// RESULT SCREEN
// =================================

const resultScreen =
    document.getElementById("resultScreen");

const resultNumber =
    document.getElementById("resultNumber");

const restartButton =
    document.getElementById("restartButton");


function showResult(prediction) {

    resultScreen.style.display = "flex";

    // Start from zero
    resultNumber.textContent = "0.00";

    // Small delay for animation
    setTimeout(() => {

        animateNumber(
            resultNumber,
            prediction
        );

    }, 300);

}


function animateNumber(element, target) {

    const duration = 1200;

    const start = performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - start;

        const progress =
            Math.min(elapsed / duration, 1);


        // Smooth easing
        const eased =
            1 - Math.pow(1 - progress, 3);


        const current =
            target * eased;


        element.textContent =
            current.toFixed(2);


        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }


    requestAnimationFrame(update);

}

function formatFeatureName(feature) {

    const names = {

        absences: "Absences",

        failures: "Previous failures",

        health: "Current health",

        goout: "Time spent going out",

        age: "Age",

        studytime: "Study time",

        freetime: "Free time",

        traveltime: "Travel time",

        Walc: "Weekend alcohol use",

        famrel: "Family relationship"

    };

    return names[feature] || feature;
}

function getStudyTimeLabel(value) {

    const labels = {
        1: "Less than 2 hours / week",
        2: "2–5 hours / week",
        3: "5–10 hours / week",
        4: "More than 10 hours / week"
    };

    return labels[value];

}
whatIfStudySlider.addEventListener("input", async () => {

    const newStudyTime =
        Number(whatIfStudySlider.value);


    // Update label immediately

    whatIfStudyLabel.textContent =
        getStudyTimeLabel(newStudyTime);


    // Current prediction

    const originalPrediction =
        Number(studentData.prediction);


    currentPrediction.textContent =
        originalPrediction.toFixed(2);


    // Create a COPY of the student's data

    const simulatedStudent = {
        ...studentData
    };


    // Change ONLY study time

    simulatedStudent.studytime =
        newStudyTime;


    // Don't send prediction back to API

    delete simulatedStudent.prediction;


    // Show loading state

    whatIfPrediction.textContent =
        "…";


    try {

        const response = await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    simulatedStudent
                )
            }
        );


        if (!response.ok) {

            throw new Error(
                `Server error: ${response.status}`
            );

        }


        const result =
            await response.json();


        const newPrediction =
            Number(
                result.predicted_final_grade
            );


        whatIfPrediction.textContent =
            newPrediction.toFixed(2);


        // Small animation

        whatIfPrediction.style.transform =
            "scale(1.08)";


        setTimeout(() => {

            whatIfPrediction.style.transform =
                "scale(1)";

        }, 150);


    } catch (error) {

        console.error(
            "What-if prediction error:",
            error
        );

        whatIfPrediction.textContent =
            "—";

    }

});

// =========================
// START AGAIN
// =========================

restartButton.addEventListener("click", () => {

    console.log("Restarting journey...");

    // Hide result screen
    resultScreen.style.display = "none";

    // Show intro screen
    introScreen.style.display = "flex";

    // Reset student data
    studentData = {};

    console.log("Journey restarted");

});