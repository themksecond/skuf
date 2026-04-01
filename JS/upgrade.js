    function Upgrade_2_1() {
        let lvl = Number(localStorage.getItem("2_1_level")) || 1;
        document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_1_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 350 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 350) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 750 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 750) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1000 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 750 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1000) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 750) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1250 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1250) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_1_level", lvl))

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
                // document.getElementById("upgrade_2_1_1_text").textContent = `МАКС.`
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_1_button").style.display = "none";
                document.getElementById("upgrade_2_1_text").textContent = `МАКС.`
            }
        }
    }

    function Upgrade_2_2() {
        let lvl = Number(localStorage.getItem("2_2_level")) || 1;
        document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_2_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_2_level", lvl))
                document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_2_level", lvl))
                document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_2_level", lvl))
                document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_2_level", lvl))
                document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_2_level", lvl))

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
                // document.getElementById("upgrade_2_1_1_text").textContent = `МАКС.`
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_2_button").style.display = "none";
                document.getElementById("upgrade_2_2_text").textContent = `МАКС.`
            }
        }
    }

    function Upgrade_2_3() {
        let lvl = Number(localStorage.getItem("2_3_level")) || 1;
        document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_3_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_3_level", lvl))
                document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_3_level", lvl))
                document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_3_level", lvl))
                document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_3_level", lvl))
                document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_3_level", lvl))

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
                // document.getElementById("upgrade_2_1_1_text").textContent = `МАКС.`
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_3_button").style.display = "none";
                document.getElementById("upgrade_2_3_text").textContent = `МАКС.`
            }
        }
    }

    function Upgrade_2_4() {
        let lvl = Number(localStorage.getItem("2_4_level")) || 1;
        document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_4_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_4_level", lvl))
                document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_4_level", lvl))
                document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_4_level", lvl))
                document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_4_level", lvl))
                document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                lvl++;
                Number(localStorage.setItem("2_4_level", lvl))

                tap_upgrade = tap_upgrade + 1;
                localStorage.setItem('tap_upgrade', tap_upgrade);
                beer_in_hour_upgrade = beer_in_hour_upgrade + 5;
                localStorage.setItem('beer_in_hour_upgrade', beer_in_hour_upgrade);
                // document.getElementById("upgrade_2_1_1_text").textContent = `МАКС.`
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_4_button").style.display = "none";
                document.getElementById("upgrade_2_4_text").textContent = `МАКС.`
            }
        }
    }


    function Check_Upgrade_2_1() {
        let lvl = Number(localStorage.getItem("2_1_level")) || 1;
        console.log(localStorage.getItem("2_1_level"));
        document.getElementById("upgrade_2_1_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_1_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 350 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 350) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
                console.log("D")
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 750 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 750) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
                console.log("D")
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1000 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 750 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1000) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 750) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
                console.log("D")
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1250 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1250) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
                console.log("D")
            }

        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_1_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_1_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_1_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_1_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_1_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_1_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_1_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_1_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_1_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (i == 3) {
                document.getElementById("upgrade_2_1_button").style.display = "none";
                console.log("Final");
            }
        }
    }

    function Check_Upgrade_2_2() {
        let lvl = Number(localStorage.getItem("2_2_level")) || 1;
        document.getElementById("upgrade_2_2_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_2_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_2_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_2_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_2_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_2_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_2_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_2_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_2_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_2_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_2_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_2_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_2_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_2_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_2_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_2_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_2_button").style.display = "none";
            }
        }
    }

    function Check_Upgrade_2_3() {
        let lvl = Number(localStorage.getItem("2_3_level")) || 1;
        document.getElementById("upgrade_2_3_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_3_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_3_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_3_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_3_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_3_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_3_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_3_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_3_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_3_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_3_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_3_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_3_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_3_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_3_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_3_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_3_button").style.display = "none";
            }
        }
    }

    function Check_Upgrade_2_4() {
        let lvl = Number(localStorage.getItem("2_4_level")) || 1;
        document.getElementById("upgrade_2_4_text").textContent = `${lvl} ур`
        if (lvl == 6) {
            document.getElementById("upgrade_2_4_text").textContent = `МАКС.`
        }

        if (lvl == 1) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 1500 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 5 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 1500) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 5) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_4_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 2) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 2000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1250 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 10 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 2000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1250) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 10) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            // document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_4_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 3) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 3000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1500 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 15 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 3000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1500) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 15) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_4_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 4) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 4500 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 1750 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";

            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 4500) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 1750) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_4_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 5) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`

            document.getElementById("upgrade_2_4_button").style.backgroundColor = "white";
            document.getElementById("upgrade_2_4_1").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_2").style.textDecoration = "none";
            document.getElementById("upgrade_2_4_3").style.textDecoration = "none";


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            //ПРОВЕРКА
            // if(i == 2){
            //     document.getElementById("upgrade_2_1_button").style.backgroundColor = "green";
            //     console.log("D")
            // }

            if (i == 3) {
                document.getElementById("upgrade_2_4_button").style.backgroundColor = "green";
                console.log("D");
            }
        }

        if (lvl == 6) {
            document.getElementById("upgrade_2_4_1").textContent = `- Иметь на балансе ${Number(localStorage.getItem('test_coin'))} / 6000 бутылок пива.`
            document.getElementById("upgrade_2_4_2").textContent = `Тапнуть по экрану ${Number(tap)} / 2000 раз.`
            document.getElementById("upgrade_2_4_3").textContent = `Иметь на балансе ${Number(test_fish)} / 20 рыб.`


            let i = 0;

            if (Number(localStorage.getItem('test_coin')) >= 6000) {
                document.getElementById("upgrade_2_4_1").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(tap) >= 2000) {
                document.getElementById("upgrade_2_4_2").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }

            if (Number(localStorage.getItem('test_fish')) >= 20) {            /////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
                document.getElementById("upgrade_2_4_3").style.textDecoration = "line-through";
                i++;
            }
            else {
                console.log("skip");
            }


            if (i == 3) {
                // Number(localStorage.setItem("2_1_level", lvl))
                document.getElementById("upgrade_2_4_button").style.display = "none";
            }
        }
    }