dojo.require("esri.map");
      
      var map;
      
      function init() {
       
      	 var map = new esri.Map("mapDiv", {
            extent: new esri.geometry.Extent({xmin:-15.141872399902354,ymin:34.34218564941406,xmax:7.358127600097646,ymax:45.59218564941406})
         });
        
        //create tiled map layer
        var tiled = new esri.layers.ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer");
        //add layer to map
        map.addLayer(tiled);
	dojo.connect(map, "onExtentChange", showExtent);
        
        //create dynamic map layer
        var dynamic = new esri.layers.ArcGISDynamicMapServiceLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_PublicSafety_Louisville/MapServer");  
        //add layer to map
        map.addLayer(dynamic);
        
       dojo.connect(map, "onClick", displayCoordinate);
	   
      }
      
      function showExtent(extent) {
         s = "Map extent: X min " + extent.xmin + "; "
	 + "Y min " + extent.ymin + "; "
	 + "X max " + extent.xmax + "; "
	 + "Y max " + extent.ymax;
	 dojo.byId("info").innerHTML = s;
      }
	  
	  function displayCoordinate(evt) {
         alert("Latitude: " + evt.mapPoint.y + " Longitude: " + evt.mapPoint.x);
      }
	  
      dojo.addOnLoad(init);