const getData = async () => {
    let members;
    let cardBox = document.querySelector(".card_Container");
    let data = await fetch("https://api.ecelliitr.org/edc/team");
    members = await data.json()
    members.forEach(type => {
        type.members.forEach(member => {
            console.log(member);
            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = ` <div class="imbBx">
<img src="${member.image}" alt="">
</div>

<div class="content">
<div class="contentBx">
    <h3>${member.name}<br><span class="position">${member.position}</span><br><span>${member.quote}</span><br><span><i class="fa-solid fa-phone"></i>${member.mobile}</span></h3>
</div>
<ul class="sci">
                        <li style="--i: 1">
                            <a href="${member.email}"><i class="fa-solid fa-envelope"></i></a>
                        </li>
                        <li style="--i: 2">
                            <a href="${member.fblink}"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li style="--i: 3">
                            <a href="${member.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
</div> `

cardBox.appendChild(card);
        });
    });
}
getData()

