const handlesubmit = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const ph_number = event.target["no"].value;
    const email = event.target["email"].value;
    const price = event.target["price"].value;
    const state = event.target["state"].value;
    const address = event.target["address"].value;
    const pincode = event.target["pincode"].value;
    const requirements = event.target["requirements"].value;
    // if (no.length!=10){
    //     window.alert("enter a valid phone number")
    // }

    let x = {
        name,
        email,
        ph_number,
        price,
        state,
        pincode,
        address,
        requirements
    }
    const res = await fetch ('/api/ownerform/product/create',{
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
    document.getElementById("price").value="";
    document.getElementById("state").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("requirements").value="";
    console.log(x)
    console.log(res)

}