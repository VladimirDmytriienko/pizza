
export function returnDate(d){
    const stringDate = new Date(d);
	const date = stringDate.getDate().toString().padStart(2, "0");
	const month = (stringDate.getMonth() + 1).toString().padStart(2, "0");
	const year = stringDate.getFullYear();

	const h = stringDate.getHours().toString().padStart(2, "0");
	const min = stringDate.getMinutes().toString().padStart(2, "0");

	return `${date}.${month}.${year}, ${h}:${min}`;
}

