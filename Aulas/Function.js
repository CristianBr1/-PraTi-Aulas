let date = new Date();

const newDate = (date) => {
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
};

console.log(newDate(date));

const randonDate = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randonDate(5,12));