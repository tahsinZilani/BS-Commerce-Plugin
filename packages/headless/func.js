async function payment() {
  try {
    const a = await axios.get('http://localhost:3000/api/create-session');
    console.log(a.data);
    // if (a.status === 200) window.location.replace(a.data.GatewayPageURL);
  } catch (err) {
    console.log(err);
  }
}
