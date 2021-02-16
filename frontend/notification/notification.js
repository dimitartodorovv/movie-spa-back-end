   const notifications = {
       error: document.querySelector("#errorBox"),
       errorNot: document.querySelector(".notifications"),
       successNot: document.querySelector("#success"),
       success: document.querySelector("#successBox")
   };

   function notMessages(typeMessage) {
       return notifications[typeMessage]
   };

   function notTypes(typeNotification) {
       return notifications[typeNotification]
   }
  
  export  function errHandler(typeMess,typeNot,message) {
          
           notTypes(typeNot).style.display = 'block'
           notMessages(typeMess).innerHTML = message;

                setTimeout(() => {
                    notTypes(typeNot).style.display = "none"
                }, 3000);
        
}
