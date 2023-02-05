const salute = 'Hi';
const age = 25;
export const salute2 = 'Hello';
export { salute, age }
const gretting = (salute, name) => console.log(`${salute} ${name}`);
export default gretting;