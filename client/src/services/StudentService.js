import Api from '@/services/Api'

export default {
  index () {

    return [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      }
    ];
    // return Api().get('students', {
    //   params: {
    //     search: search
    //   }
    // })
  },
  show (studentId) {
    return Api().get(`students/${studentId}`)
  },
  post (student) {
    return Api().post('students', student)
  },
  put (student) {
    return Api().put(`students/${student.id}`, student)
  }
}
