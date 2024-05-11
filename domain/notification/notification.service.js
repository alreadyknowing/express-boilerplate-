export default class NotificationService {
    constructor({UserRepository = null, UserService = null}) {
        //disini bisa langsung menggunakan UserRepository
        //atau bisa juga melalui service User jadi yang dipanggil adalah sebuah service, tapi ingat jangan overwhalming, artinya dibuat simple saja, ini masih monolitic bukan microservices, tempatnya service adalah panggil repo
        //tempatnya controller adalah panggil service,, begitu seterusnya. berbeda dengan microservices, service yang dipanggil. untuk sebuah domain/module. ingat jangan over KISS (KEEP IT SIMPLE SUPERMAN)!!!
        // this.NotificationRepository = NotificationRepository
        this.UserRepository = UserRepository
        this.UserService = UserService
    }

    async sendEmailNewPost() {
        //get all semua user kecuali user yang buat post
    }
}
