export class Clock {
    constructor() {
        this.timeLeft = 60;

        this.money = 200;

        this.moneyLeft = this.money;

        this.moneyDown = 12;
        this.flag = false;

        this.elements = {
            time: document.getElementById("time"), 
            money: document.getElementById("money")
        };

        this.buttons = {
            "play": document.getElementById("play"),
            "rest": document.getElementById("rest")
        }
        
        this.countdown = null;
    }
       
    reset() {
        this.timeLeft = 60;
        this.moneyLeft = this.money;
        this.elements.money.textContent = `${this.moneyLeft} ₺`;
        this.elements.time.textContent = `00:${String(this.timeLeft).padStart(2, '0')}`;
    }

    count() {
        this.reset();

        if (this.countdown) {
            clearInterval(this.countdown);
        }

        this.countdown = setInterval(() => {
            this.timeLeft--;
            
            if (this.timeLeft % this.moneyDown == 0) {
                this.moneyLeft -= this.money / 5; 
                this.elements.money.textContent = `${this.moneyLeft} ₺`;  
            }

            this.elements.time.textContent = `00:${String(this.timeLeft).padStart(2, '0')}`;

            if (this.timeLeft <= 0) {
                clearInterval(this.countdown);
                this.countdown = null;
            }

        }, 1000); 
    }

    update() {
        this.buttons.play.addEventListener("click", (e) => {
            if (!this.flag) {
                this.count();        
                this.flag = true;

                this.buttons.play.classList.add("d-none");
                this.buttons.rest.classList.remove("d-none");
            }
        });

        this.buttons.rest.addEventListener("click", (e) => {
            if (this.flag) {
                this.flag = false;

                this.buttons.play.classList.remove("d-none");
                this.buttons.rest.classList.add("d-none");

                this.reset();

                clearInterval(this.countdown);
                this.countdown = null;
            }
        });
    }
}
