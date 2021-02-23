import React from 'react';


const Advertisement = (type,position) => (
  <>
    <ins className="kakao_ad_area" style={{display:'none'}} 
      data-ad-unit    = "DAN-9Zqffsl36wMM59d3" 
      data-ad-width   = "320" 
      data-ad-height  = "100">
    </ins> 
    <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>

    <ins className="kakao_ad_area" style={{display:'none'}} 
      data-ad-unit    = "DAN-52jaChpTsEM64lRc" 
      data-ad-width   = "160" 
      data-ad-height  = "600"></ins> 
      <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
  </>
)
export default Advertisement;