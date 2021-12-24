const handlesubmittt = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const ph_number = event.target["number"].value;
    const email = event.target["email"].value;
    const membership = event.target["membership"].value;
    const services = event.target["service"].value;
    // if (no.length!=10){
    //     window.alert("enter a valid phone number")
    // }

    let x = {
        name,
        email,
        ph_number,
        membership,
        services
    }
    const res = await fetch ('/api/serviceform/product/create',{
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
    document.getElementById("number").value="";
    document.getElementById("membership").value="";
    document.getElementById("service").value="";
    console.log(x)
    console.log(res)

}