let cars = {
    label: 'Autos',
    subs: [
        {
          label: 'SUVs',
          subs: []
        },
        {
          label: 'Trucks',
          subs: [
            {
              label: '2 Wheel Drive',
              subs: []
            },
            {
              label: '4 Wheel Drive',
              subs: [
                {
                  label: 'Ford',
                  subs: []
                },
                {
                  label: 'Chevrolet',
                  subs: []
                }
              ]
            }
          ]
        },
        {
          label: 'Sedan',
          subs: []
        }
    ]

}

function iterateObject(obj) {
    for (let key in obj) {
        if(typeof obj[key] === "object" && obj[key] !== null) {
            iterateObject(obj[key]); // recursive call for nested objects
        } else {
            console.log(`key: ${obj[key]}`);
            document.getElementById('container').innerHTML += `<div>label: ${obj[key]}</div>`;
        }
    }
}

iterateObject(cars);