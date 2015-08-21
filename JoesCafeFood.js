var dEntryCount=0;
function initialize(idTheTable,idXmlData)
{
 var oTheTable = document.getElementByid(idTheTable);
 var thTBODY = oTheTable.getElementsByTagName('tbody');
 if(theTBODY.length>0)
  { oTheTable.removeChild(theTBODY[0]);
  theTBODY = generateMenuContent(idXmlData);
  oTheTable.appendChild(theTBODY);
  }
  function generateMenuContent(idXmlData)
  {
   var i=0,j=0;
   var theTBODYNode =document.createElement("TBODY");
   var oXMLDoc=document.getElementById(idXmlData);
   var oMenuSections = oXMLDoc.getElementsByTagName('section');
   for(i=0;i<aMenuSections.length,i++)
    {
	 var isName=aMenuSections.item(i).getAttribute('name');
	 var oATR = document.createElement('TR');
	 var oTD= document.createElement('TD');
	 oTD.setAttribute('colspan','3');
	 oTD.appendChild(document.createTextNode(isName));
	 oTR.appendChilde(oTD);
	 theTBODYNode.appendChilde(oTR);
	 var aEntries=aMenuSections.item(i).getElementsByTagName('entree');
	 for(j=0;j<aEntrees.length,j++)
	 { oTR=document.createElement('TR');
	 if(aEntrees.item(j).getAttribute('vegetarian'))
	  oTR.setAttribute("vegetarian",aEntrees.item(j).getAttribute("vegetarian"));
	  oTD=document.createElement("TD");
	  oTD.setAttribute("align","center");
	  var oCB=document.createElement('INPUT');
	  oCB.setAttribute('name','item'+gentreeCount++);
	  oCB.setAttribute('type','checkbox');
	  oTD.appendChild(oCB);
	  oTR.appendChild(oTD);
	  
	  /* Create TD Item for Name */
	  
	  oTD =document.createElement('TD');
	  var oItemNode=aEntrees.item(j).getElementsByTagName('item').[0];
	  oTD.appencChild(document.createTextNode(oItemNode.firstChild.data));
	  oTR.appendChild(oTD);
	  
	  /*Create TD for Price */
	  oTD=document.createElementById('TD');
	  oTD.setAttribute('align','right');
	  var oPriceNode = aEntrees.item(j).getElementsByTagName('price')[0];
	  oTD.appendChild(document.createTextNode(oPriceNode.firstChild.data));
	  oTR.appendChild(oTD);
	  //Add row to table body
	  theTBODYNode.appendChild(oTR);
	  }
	  }
	  return thTBODYNode;
	  }
	  //Calculating the total Bill
	  function calculateBIlle(idMenuTable)
	  {
	   var fBillTotal=0.0;
	   var i =0;
	   var oTable = document.getElementById(idMenuTable);
	   var aCBTags = oTable.getElementsByTagName("INPUT");
	   for(i=0;i<aCBTags.length;i++)
	    {
		 if(aCBTags[i].checked)
		  {
		   var oTR = getParentTag(aCBTags[i],'TR');
		   var OTDPrice = oTR.getElementsByTagName('TD')[2];
		   fBillTotal+=parseFloat(oTDPrice.firstChild.data);
		   }
		   }
		   return Math.round(fBillTotal*100.0)/100.0;
      }
	  //Indicating vegetarian or Not
	  function highlightVegetarian(idTable,bShowVeg)
	  {
	  var i=0;
	  varoTable= document.getElementById(idTable);
	  var oTBODY = oTable.getElementsByTagName('TBODY')[0];
	  var aTRs = oTBODY.getElementsByTagName('TR');
	  for(i=0;i<aTRs.length;i++)
	   {
	    if (aTRs.getAttribute('vegetarian'))
		{
		 if(bShowVeg)
		  aTRS[i].style.backgroundColor = "lightGreeen";
		  else
		  aTRs[i].style=.ackGroundColor = "";
		  }
		  }
		  }
		  //Parent Node making
		  
		  function getParentTag(oNode,sParentType)
		  {
		  var oParent = oNode.parentNode;
		  while(oParent)
		  {
		   if(oParent.nodeName == sParentType)
		   return oParent;
		   oParent=oParent.parentNode;
		   }
		   return oParent;
	     }