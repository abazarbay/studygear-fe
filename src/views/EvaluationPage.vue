<template>
    <div>
        <h1>Evaluation</h1>
        <hr>
        <div v-if="questions.length > 0">
          <h2>{{ questions[currentQuestionIndex].text }}</h2>
          <div v-if="Array.isArray(questions[currentQuestionIndex].options)">
              <select v-model="questions[currentQuestionIndex].answer">
                  <option disabled value="">Please select an option</option>
                  <option v-for="(option, index) in questions[currentQuestionIndex].options" :key="index" :value="option">
                      {{ option }}
                  </option>
              </select>
              <button v-if="currentQuestionIndex === questions.length - 1" @click="submit">Submit</button>
          </div>
          <button @click="previousQuestion" v-if="currentQuestionIndex > 0">Back</button>
          <button @click="nextQuestion" v-if="currentQuestionIndex < questions.length - 1">Next</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EvaluationForm',
  data() {
      return {
          currentQuestionIndex: 0,
          questions: [
              { 
                  text: 'Which country are you applying from?', 
                  options: ['Armenia', 'Azerbaijan', 'Belarus', 'Kazakhstan', 'Kyrgyzstan', 'Moldova', 'Russia', 'Tajikistan', 'Uzbekistan'], 
                  answer: '' 
              },
              { text: 'Your gender?', options: ['Woman', 'Man', 'Diverse'], answer: '' },
              { text: 'How old are you?', options: this.generateYears(1900, new Date().getFullYear()), answer: '' },
              { text: 'How do you want to apply?', options: ['Studienkolleg after at least 11 classes', 'Bachelor at least 1 year', 'Bachelor, graduated', 'Studienkolleg with one year of Bachelor', 'College with EU approved diploma', 'College without EU approved diploma', 'Master', 'other type' ], answer: '' },
              { text: 'When do you want to apply?', options: this.generateSemesters(), answer: '' },
              { text: 'Which subjects are you interested in?', options: ['Medicine, dentistry, pharmacy, veterinary', 'Law, jurisprudence', 'IT, computer science, programming', 'Economics, finance, marketing, management', 'Engineering, construction', 'Mathematics, statistics, physics, chemistry, biology, natural sciences', 'Linguistics, history, cultural studies', 'Creative areas (design, architecture, art, music)', 'Social sciences, sociology, regional studies, international relations', 'Sports, sports management', 'Ecology, agrarian sciences, agriculture', 'Pedagogical sciences, educational development, psychology', 'Education for teachers of secondary schools' ], answer: '' },
              { text: 'Level of German Language Knowledge', options: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], answer: '' },
              { text: 'Level of English Language Knowledge', options: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], answer: '' }
      
          ]
      };
  },
  methods: {
      nextQuestion() {
          if (this.currentQuestionIndex < this.questions.length - 1) {
              this.currentQuestionIndex++;
          }
      },
      previousQuestion() {
          if (this.currentQuestionIndex > 0) {
              this.currentQuestionIndex--;
          }
      },
      generateYears(startYear, endYear) {
          let years = [];
          for(let year = startYear; year <= endYear; year++) {
              years.push(year);
          }
          return years;
      },
      generateSemesters() {
          let currentYear = new Date().getFullYear();
          let currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so we add 1
          let nextWinterSemester = currentMonth > 9 ? `Wintersemester ${currentYear + 1}` : `Wintersemester ${currentYear}`;
          let nextSummerSemester = currentMonth > 3 ? `Sommersemester ${currentYear + 1}` : `Sommersemester ${currentYear}`;
          return [nextWinterSemester, nextSummerSemester];
      },
      
      async submit() {
      const surveyResponses = this.questions.map(question => {
        if (question.text === undefined || question.answer === undefined) {
          throw new Error('One or more question properties are undefined');
        }

        return {
          Question: question.text,
          Answer: question.answer
        };
      });

      console.log('Survey Responses:', surveyResponses);

      try {
        // Assuming the backend endpoint is '/api/submit-survey'
        const response = await axios.post('/api/submit-survey', {
          surveyResponses
        });

        console.log('Survey responses submitted successfully', response.data);
      } catch (error) {
        console.error('Error submitting survey responses:', error);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  border-bottom: 1 px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16 px;
}
#description {
  margin: 0;
  padding: 16 px;
  text-align: right;
}

#next-button {
 width: 100%;
}

</style>
