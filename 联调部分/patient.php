<?php
$info=json_decode(file_get_contents('php://input'),true);
$hospitalId=$info['hospitalId'];
$stffId=$info['stffId'];
$departId=$info['departId'];
if($hospitalId==10001){
	if($stffId==2002){
		 if($departId==201){
       $json=<<<mark
   {
"status":"OK", 
"startTime":1434091059460,
"endTime":1434091059739, 
"version":"1.0",
"msg":"操作成功",
"data":[
      {"id":"980001","patCardNum":"201809019981","patId":1020,"patName":"李亮亮","feeId":"C","natId":"D","patSex":"男","patAge":19,"regDepartId":"201809019981","regDoctorId":"401","regVisitedState":1,"regFirstSign":0,"regNm":0},
	  {"id":"180002","patCardNum":"201709019581","patId":1220,"patName":"王亮亮","feeId":"C","natId":"D","patSex":"男","patAge":22,"regDepartId":"201809019981","regDoctorId":"401","regVisitedState":0,"regFirstSign":0,"regNm":0},
	  {"id":"340021","patCardNum":"201609013381","patId":1040,"patName":"赵亮亮","feeId":"C","natId":"D","patSex":"男","patAge":23,"regDepartId":"201809019981","regDoctorId":"401","regVisitedState":0,"regFirstSign":0,"regNm":0},
	  {"id":"528021","patCardNum":"201509012981","patId":3021,"patName":"刘亮亮","feeId":"C","natId":"D","patSex":"男","patAge":22,"regDepartId":"201809019981","regDoctorId":"401","regVisitedState":2,"regFirstSign":0,"regNm":0},
	  {"id":"433214","patCardNum":"201409019983","patId":2021,"patName":"张亮亮","feeId":"C","natId":"D","patSex":"男","patAge":16,"regDepartId":"201809019981","regDoctorId":"401","regVisitedState":2,"regFirstSign":0,"regNm":0}
   
  ]	
}

mark;
echo $json;
		 }
	}

}
?>