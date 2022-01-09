const ne = async ()=>{
    const res = await fetch ('http://localhost:8080/api/tenantform/product');
    const resdata = await res.json();
    console.log(resdata)
}
ne();
