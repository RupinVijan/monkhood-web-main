const handlesubmitt = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const ph_number = event.target["no"].value;
    const email = event.target["email"].value;
    const price = event.target["budget"].value;
    const college = event.target["college"].value;
    const requirements = event.target["requirements"].value;
    // if (no.length!=10){
    //     window.alert("enter a valid phone number")
    // }

    let x = {
        name,
        email,
        ph_number,
        price,
        college,
        requirements
    }
    const res = await fetch ('/api/tenantform/product/create',{
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
    document.getElementById("budget").value="";
    document.getElementById("college").value="";
    document.getElementById("requirements").value="";
    console.log(x)
    console.log(res)

}