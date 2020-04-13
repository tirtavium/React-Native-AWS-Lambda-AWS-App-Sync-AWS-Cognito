let header = [{"viewType":"image","data":"https://www.cabrini.edu/globalassets/images-website/covid/covid-19-header_1200.jpg?width=480"}]
let data1 = [{"viewType":"label","data":"Kasus Covid-19 di Indonesia"}]
let topData = [{"viewType":"label","data":""}]
let infected = {"viewType":"card","data":"1677 Terkonfirmasi","color":"#7cbb00"}
let cured = {"viewType":"card","data":"103 Sembuh","color":"#7cbb00"}
let inpatient = {"viewType":"card","data":"103 Dalam Perawatan","color":"#7cbb00"}
let died = {"viewType":"card","data":"157 Meninggal","color":"#7cbb00"}
let list1 = [infected,died]
let list2 = [cured,inpatient]
let viewsType = [{"viewType":"LINE", "components":topData,"color":"#1D2754"},{"viewType":"FULL","components":header,"color":"#7cbb00"},{"viewType":"LINE", "components":data1,"color":"#fff"},{"viewType":"FULL","components":list1,"color":"#fff"},{"viewType":"FULL","components":list2,"color":"#fff"},{"viewType":"FULL","components":[cured],"color":"#fff"}]
