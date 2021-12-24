const text="MonkHood Living Solutions";
        let index=0;
        function writee(){
            document.querySelector(".writee").innerText=text.slice(0,index);
            index++;
            if (index>text.length){
                index=0;
            }
        }
        setInterval(() => {
            writee();
        }, 200);