<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EVC Plus</title>
</head>
<body>

<script>
let EVCode = prompt("Geli code-ka EVCPlus (Tusaale: *770#)");

switch (EVCode) {
    case "*770#":
        let pin = prompt("-EVCPlus-\nGeli PIN-kaaga ");

        if (pin === "9090") {
            let option = prompt(
                "EVCPlus\n" +
                "1. Itus Haraaga\n" +
                "2. Kaarka hadalka\n" +
                "3. Bixi Biil\n" +
                "4. U wareeji EVCPlus\n" +
                "5. Warbixin Kooban\n" +
                "6. Salaam Bank\n" +
                "7. Maareynta\n" +
                "8. Bill Payment"
            );

            switch (option) {
                case "1":
                    alert("Haraagaagu waa $100");
                    break;

                case "2":
                    let kaarka = prompt(
                        "Kaarka Hadalka\n" +
                        "1. Ku shubo\n" +
                        "2. Ugu shubo"
                    );

                    switch (kaarka) {
                        case "1":
                            let lacag = prompt("Geli lacagta aad rabto inaad ku shubato:");
                            alert("$" + lacag + " ayaa laguu shubay.");
                            break;

                        case "2":
                            let number = prompt("Geli lambarka aad ugu shubeyso:");
                            let lacag2 = prompt("Geli lacagta aad ugu shubeyso:");
                            alert("$" + lacag2 + " ayaa loogu shubay " + number);
                            break;

                        default:
                            alert("Numberka aad galisay waa qalad");
                    }
                    break;

                case "3":
                    let biil = prompt(
                        "Bixi Biil\n" +
                        "1. Koronto\n" +
                        "2. Biyo\n" +
                        "3. Internet"
                    );

                    switch (biil) {
                        case "1":
                            alert("Waxaad bixisay biilka korontada.");
                            break;
                        case "2":
                            alert("Waxaad bixisay biilka biyaha.");
                            break;
                        case "3":
                            alert("Waxaad bixisay biilka internet-ka.");
                            break;
                        default:
                            alert("Numberka aad galisay waa qalad");
                    }
                    break;

                case "4":
                    let transferNumber = prompt("Geli lambarka aad lacagta u wareejineyso:");
                    let transferMoney = prompt("Geli lacagta aad wareejineyso:");
                    alert("$" + transferMoney + " ayaa loo wareejiyay " + transferNumber);
                    break;

                case "5":
                    alert("Warbixin Kooban:\nHaraaga: $100\nWax kala iibsigaadii ugu dambeeyay: $5");
                    break;

                case "6":
                    let bank = prompt(
                        "Salaam Bank\n" +
                        "1. Haraaga Bankiga\n" +
                        "2. Lacag dhigasho\n" +
                        "3. Lacag bixisasho"
                    );

                    switch (bank) {
                        case "1":
                            alert("Haraaga Salaam Bank waa $200");
                            break;
                        case "2":
                            alert("Lacagta waa la dhigay.");
                            break;
                        case "3":
                            alert("Lacagta waa lagaa bixiyay.");
                            break;
                        default:
                            alert("Numberka aad galisay waa qalad");
                    }
                    break;

                case "7":
                    let management = prompt(
                        "Maareynta\n" +
                        "1. Beddel PIN\n" +
                        "2. Beddel luuqadda"
                    );

                    switch (management) {
                        case "1":
                            let oldPin = prompt("Geli PIN-kaaga hore:");
                            if (oldPin === "9090") {
                                let newPin = prompt("Geli PIN-ka cusub:");
                                alert("PIN-kaaga waa la beddelay.");
                            } else {
                                alert("Pinka aad galisay waa qalad");
                            }
                            break;

                        case "2":
                            alert("Luuqadda waa la beddelay.");
                            break;

                        default:
                            alert("Numberka aad galisay waa qalad");
                    }
                    break;

                case "8":
                    let billPayment = prompt("Bill Payment\nGeli lambarka bill-ka:");
                    let billAmount = prompt("Geli lacagta bill-ka:");
                    alert("Bill-ka " + billPayment + " oo ah $" + billAmount + " waa la bixiyay.");
                    break;

                default:
                    alert("Numberka aad galisay waa qalad");
            }

        } else {
            alert("Pinka aad galisay waa qalad");
        }
        break;

    default:
        alert("Code-ka aad galisay waa qalad");
}
</script>

</body>
</html>