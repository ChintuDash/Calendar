  const date=document.getElementById("date");
        const day=document.getElementById("day");
        const month=document.getElementById("month");
        const year=document.getElementById("year");
        
        
       
        const today=new Date();
        

        const weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const allMonths= ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
        day.innerHTML = weekDays[today.getDay()];
        month.innerHTML = allMonths[today.getMonth()];
        year.innerHTML = today.getFullYear();                  

        
        function updateClock(){                 
            const clockElement=document.getElementById("hour");
            const now=new Date();
            const hours=now.getHours().toString().padStart(2,'0');
            const minutes=now.getMinutes().toString().padStart(2,'0');
            const seconds=now.getSeconds().toString().padStart(2,'0');

            clockElement.textContent=`IST - ${hours}:${minutes}:${seconds}`;
        }
        updateClock();
        setInterval(updateClock,1000);