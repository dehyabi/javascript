const obj = {
    "status": "success",
    "data": {
        "tingkat": {
            "rendah": 0,
            "sedang": 0,
            "tinggi": 100
        },
        "ipk": [
            {
                "prodi": "",
                "average_ipk": 4,
                "count": 6,
                "min_ipk": 4,
                "max_ipk": 4,
                "std_dev": 0
            }
        ],
        "income": {
            "data": [
                {
                    "Tidak Diketahui": {
                        "prodi": "Tidak Diketahui",
                        "penghasilan": 500000000,
                        "count_penghasilan": 4
                    }
                }
            ],
            "max": 500000000
        },
        "waiting_time": {
            "data": [
                {
                    "": {
                        "prodi": "",
                        "total_waktu_tunggu": "2",
                        "count_waktu_tunggu": 1,
                        "average_waktu_tunggu": 2
                    }
                }
            ],
            "max": 2
        },
        "tracer_study_alumni": {
            "alumni": 1,
            "sampel": 11
        },
        "summary_text": "",
        "country": {
            "Indonesia": 4,
            "Singapore": 1,
            "American Samoa": 1
        },
        "province": {
            "East Jawa": 1
        }
    }
}

for (const [key, value] of Object.entries(obj.data)) {
    console.log(`${key} ${value}`);
    document.getElementById("container").innerHTML += `<div>${key}</div>`;
  }

// for (const [key, value] of Object.entries(obj.data.ipk[0])) {
//     console.log(`${key} ${value}`);
//     document.getElementById("container").innerHTML += `<div>${key} ${value}</div>`;
//   }

