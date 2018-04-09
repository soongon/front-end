<%
  Thread.sleep(4000L);
  String confNum = request.getParameter("confNum");
  if ( confNum.equals("1234") ) {
    out.print("<img src='./imgs/qr.png' style='width: 50px; height: 50px;' />");
  }
  else {
    out.print("ERROR!");
  }
%>
