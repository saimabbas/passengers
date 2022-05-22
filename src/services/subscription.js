export const handleSubscription = async (e, photoRef, nameRef, emailRef, imageUrl, account) => {
    e.preventDefault();

    const subscriptionData = {
        picture: imageUrl,
        name: nameRef.current.value,
        email: emailRef.current.value,
        account
      };

     // add subscriptionData info at mongodb
     try {
        // setMessage("");
        const url = "https://whitelist-backend-server.herokuapp.com/users/subscriptions";
        const option = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(subscriptionData),
        };
        const response = await fetch(url, option);
        const data = await response.json();
        
        if (data) {
            photoRef.current.value = ""; 
            nameRef.current.value = ""; 
            emailRef.current.value = "";
        }
      } catch (error) {
        console.log("err", error);
      }
};

export const getSubscription = async (account) => {
    try {
        // setMessage("");
        const url = `https://whitelist-backend-server.herokuapp.com/users/getSubscriptionByAccount?account=${account}`;

        const option = {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },          
        };
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("err", error);
        
      }
};