// main.js
        function showPopup() {
            var popup = document.getElementById("myPopup");
            popup.style.display = "block";
        }

        function closePopup() {
            var popup = document.getElementById("myPopup");
            popup.style.display = "none";
        }

        function checkLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var attempts = parseInt(localStorage.getItem("attempts")) || 0;
            var currentDate = new Date();
            var year = currentDate.getFullYear();
            var month = currentDate.getMonth() + 1;
            var birthYear = 2004;
            var birthMonth = 8;
            var age = year - birthYear - (month < birthMonth ? 1 : 0);
            if (username === "张三" && password === "123" && attempts < 3) {
                var secretPage = window.open("", "_blank");
                secretPage.document.write("<!DOCTYPE html><html><head><title>我的秘密</title></head><body>");
                secretPage.document.write("现在是" + year + "年" + month + "月，我已经" + age + "岁了。");
                secretPage.document.write("</body></html>");
                secretPage.document.close();
                localStorage.setItem("attempts", 0);
            } else {
                attempts += 1;
                localStorage.setItem("attempts", attempts);
                if (attempts >= 3) {
                    var secretPage = window.open("", "_blank");
                    secretPage.document.write("<!DOCTYPE html><html><head><title>我的秘密</title></head><body>");
                    secretPage.document.write("你已经超过3次机会，我的秘密就不告诉你");
                    secretPage.document.write("</body></html>");
                    secretPage.document.close();
                } else {
                    alert("用户名或密码错误。你还有 " + (3 - attempts) + " 次机会。");
                }
            }
        }

        window.onload = function() {
            setInterval(function() {
                var currentDate = new Date();
                var year = currentDate.getFullYear();
                var month = currentDate.getMonth() + 1;
                var birthYear = 2004;
                var birthMonth = 8;
                var age = year - birthYear - (month < birthMonth ? 1 : 0);
                document.getElementById("age").innerHTML = age;
            }, 1000);
        }