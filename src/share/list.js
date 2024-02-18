export const doctors = [
  {
    id: "0001",
    name: "Петрашевич Анна",
    specialization: "Terapevt",
    phone: "+380101234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0002",
    name: "Пронін Максим",
    specialization: "Terapevt",
    phone: "+380201234567",
    logo: "logo/2.png",
  },
  {
    id: "0003",
    name: "Авдєєва Інна",
    specialization: "Terapevt",
    phone: "+380301234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0004",
    name: "Григоренко Сергій",
    specialization: "Otorhinolaryngologist",
    phone: "+380111234567",
    logo: "/logo/2.png",
  },
  {
    id: "0005",
    name: "Штольц Анжела",
    specialization: "Otorhinolaryngologist",
    phone: "+380211234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0006",
    name: "Зижук Андрій",
    specialization: "Otorhinolaryngologist",
    phone: "+380311234567",
    logo: "logo/2.png",
  },
  {
    id: "0007",
    name: "Спік Ольга",
    specialization: "Ophthalmologist",
    phone: "+380121234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0008",
    name: "Донцов Борис",
    specialization: "Ophthalmologist",
    phone: "+380221234567",
    logo: "/logo/2.png",
  },
  {
    id: "0009",
    name: "Богач Іларіона",
    specialization: "Ophthalmologist",
    phone: "+380321234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0010",
    name: "Жук Ілля",
    specialization: "Hirurgist",
    phone: "+380131234567",
    logo: "/logo/2.png",
  },
  {
    id: "0011",
    name: "Запашна Маргарита",
    specialization: "Hirurgist",
    phone: "+380231234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0012",
    name: "Князь Алі",
    specialization: "Hirurgist",
    phone: "+380331234567",
    logo: "/logo/2.png",
  },
  {
    id: "0013",
    name: "Золото Маргарита",
    specialization: "Pediatrician",
    phone: "+380141234567",
    logo: "logo/1.jpg",
  },
  {
    id: "0014",
    name: "Крук Генадій",
    specialization: "Pediatrician",
    phone: "+380241234567",
    logo: "logo/2.png",
  },
  {
    id: "0015",
    name: "Божко Єва",
    specialization: "Pediatrician",
    phone: "+380341234567",
    logo: "logo/1.jpg",
  },
];

export const sortDoctors = (isAZ, name, search) => {
  const { newList } = countResult(search);

  if (name === "Name") {
    newList.sort((a, b) => {
      return isAZ ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
  }

  if (name === "Specialization") {
    newList.sort((a, b) => {
      return isAZ
        ? a.specialization.localeCompare(b.specialization)
        : b.specialization.localeCompare(a.specialization);
    });
  }

  return { newList };
};

export const filterDoctors = (search) => {
  const lc = search.toLowerCase();
  return doctors.filter((doctor) => {
    if (
      doctor.name.toLowerCase().indexOf(lc) !== -1 ||
      doctor.specialization.toLowerCase().indexOf(lc) !== -1 ||
      doctor.id.toLowerCase().indexOf(lc) !== -1
    ) {
      return true;
    }

    return false;
  });
};

export const countResult = (search) => {
  const arr = search === "" ? [...doctors] : [...filterDoctors(search)];
  const newList = arr.map((item) => {
    return {
      name: item.name,
      specialization: item.specialization,
    };
  });

  return { newList };
};

export const findDoctor = (searchText, bySpecialization = false) => {
  const query = searchText.toLowerCase();
  if (bySpecialization) {
    return doctors.filter((doctor) =>
      doctor.specialization.toLowerCase().includes(query)
    );
  } else {
    return doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(query)
    );
  }
};



// const showDoctor = (searchString, bySpecialization) => {
//   if (!searchString.trim()) {
//     return doctors;
//   }

//   const normalSearchString = searchString.toLowerCase();
//   if (bySpecialization) {
//     return doctors.filter((doctor) =>
//       doctor.specialization.toLocaleLowerCase().includes(normalSearchString)
//     );
//   } else {
//     return doctors.filter((doctor) =>
//       doctor.name.toLocaleLowerCase().includes(normalSearchString)
//     );
//   }
// };

// console.log(showDoctor);
