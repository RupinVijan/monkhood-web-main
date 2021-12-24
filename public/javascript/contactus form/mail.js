const handlesubmittt = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const no = event.target["no"].value;
    const to = event.target["email"].value;
    const message = event.target["message"].value;
    // if (no.length!=10){
    //     window.alert("enter a valid phone number")
    // }

    let x = {
        name,
        to,
        no,
        message
    }
    const res = await fetch ('/api/contactform/product/sendmail',{
        method:"POST",headers : { 
            'Content-Type': 'application/json',
           },
        body:JSON.stringify(x)
    })
    swal({
        title: "Thank You!",
        text: "Your response has been recorded successfully! Our team will be contacting you soon.",
        icon: "success",
      });
    // window.alert("We'll Contact you shortly!")
    // location.reload();
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("no").value="";
    document.getElementById("message").value="";
    console.log(x)
    console.log(res)

}