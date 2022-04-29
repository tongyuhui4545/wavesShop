const { authService } = require("../services")

const authController = {
    async hello() {
        try {
            const uhello = await authService.helloService();
            console.log(uhello)
        }
        catch (error) {

        }
    }
}


module.exports = authController;