docs.mapLayers = [{
    "title": "record/ Geotiff Layer/title",
    "desc": "record/ Geotiff Layer/desc",
    "summaryDesc": "record/ Geotiff Layer/summaryDesc",
    "details": [
        
    ],
    "input": [
        {
            "title": "url",
            "desc": "record/ Geotiff Layer/input/url/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "style",
            "desc": "record/ Geotiff Layer/input/style/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Gml Layer/title",
    "desc": "record/ Gml Layer/desc",
    "summaryDesc": "record/ Gml Layer/summaryDesc",
    "details": [
        {
            "title": "Parser",
            "desc": "record/ Gml Layer/detail/Parser/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "url",
            "desc": "record/ Gml Layer/input/url/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "style",
            "desc": "record/ Gml Layer/input/style/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "renderAsSvg",
            "desc": "record/ Gml Layer/input/renderAsSvg/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/WMTS Layer/title",
    "desc": "record/WMTS Layer/desc",
    "summaryDesc": "record/WMTS Layer/summaryDesc",
    "details": [
        
    ],
    "input": [
        {
            "title": "style",
            "desc": "record/WMTS Layer/input/style/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "matrices",
            "desc": "record/WMTS Layer/input/matrices/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "customParams",
            "desc": "record/WMTS Layer/input/customParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "mergeableParams",
            "desc": "record/WMTS Layer/input/mergeableParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "dpi",
            "desc": "record/WMTS Layer/input/dpi/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "opacity",
            "desc": "record/WMTS Layer/input/opacity/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "matrixSet",
            "desc": "record/WMTS Layer/input/matrixSet/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "dimensions",
            "desc": "record/WMTS Layer/input/dimensions/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "imageFormat",
            "desc": "record/WMTS Layer/input/imageFormat/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "version",
            "desc": "record/WMTS Layer/input/version/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "requestEncoding",
            "desc": "record/WMTS Layer/input/requestEncoding/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "rasterStyle",
            "desc": "record/WMTS Layer/input/rasterStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "baseURL",
            "desc": "record/WMTS Layer/input/baseURL/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "layer",
            "desc": "record/WMTS Layer/input/layer/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "dimensionParams",
            "desc": "record/WMTS Layer/input/dimensionParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Grid Layer/title",
    "desc": "record/ Grid Layer/desc",
    "summaryDesc": "record/ Grid Layer/summaryDesc",
    "details": [
        {
            "title": "Parser",
            "desc": "record/ Grid Layer/detail/Parser/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "pointsInLine",
            "desc": "record/ Grid Layer/input/pointsInLine/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "style",
            "desc": "record/ Grid Layer/input/style/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "numberOfLines",
            "desc": "record/ Grid Layer/input/numberOfLines/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.OneOf(value=spacing)"
            ]
        },
        {
            "title": "renderAsSvg",
            "desc": "record/ Grid Layer/input/renderAsSvg/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "origin",
            "desc": "record/ Grid Layer/input/origin/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "spacing",
            "desc": "record/ Grid Layer/input/spacing/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.OneOf(value=spacing)",
                "@org.mapfish.print.parser.Requires(value=[origin])"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Geo Json Layer/title",
    "desc": "record/ Geo Json Layer/desc",
    "summaryDesc": "record/ Geo Json Layer/summaryDesc",
    "details": [
        {
            "title": "Parser",
            "desc": "record/ Geo Json Layer/detail/Parser/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "style",
            "desc": "record/ Geo Json Layer/input/style/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "renderAsSvg",
            "desc": "record/ Geo Json Layer/input/renderAsSvg/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "geoJson",
            "desc": "record/ Geo Json Layer/input/geoJson/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Wms Layer/title",
    "desc": "record/ Wms Layer/desc",
    "summaryDesc": "record/ Wms Layer/summaryDesc",
    "details": [
        
    ],
    "input": [
        {
            "title": "imageFormat",
            "desc": "record/ Wms Layer/input/imageFormat/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "styles",
            "desc": "record/ Wms Layer/input/styles/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "baseURL",
            "desc": "record/ Wms Layer/input/baseURL/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "useNativeAngle",
            "desc": "record/ Wms Layer/input/useNativeAngle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "customParams",
            "desc": "record/ Wms Layer/input/customParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "version",
            "desc": "record/ Wms Layer/input/version/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "mergeableParams",
            "desc": "record/ Wms Layer/input/mergeableParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "rasterStyle",
            "desc": "record/ Wms Layer/input/rasterStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "opacity",
            "desc": "record/ Wms Layer/input/opacity/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "layers",
            "desc": "record/ Wms Layer/input/layers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Osm Layer/title",
    "desc": "record/ Osm Layer/desc",
    "summaryDesc": "record/ Osm Layer/summaryDesc",
    "details": [
        
    ],
    "input": [
        {
            "title": "imageFormat",
            "desc": "record/ Osm Layer/input/imageFormat/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "dpi",
            "desc": "record/ Osm Layer/input/dpi/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "maxExtent",
            "desc": "record/ Osm Layer/input/maxExtent/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "baseURL",
            "desc": "record/ Osm Layer/input/baseURL/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "resolutions",
            "desc": "record/ Osm Layer/input/resolutions/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "tileSize",
            "desc": "record/ Osm Layer/input/tileSize/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "rasterStyle",
            "desc": "record/ Osm Layer/input/rasterStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "resolutionTolerance",
            "desc": "record/ Osm Layer/input/resolutionTolerance/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "opacity",
            "desc": "record/ Osm Layer/input/opacity/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Feature Layer/title",
    "desc": "record/ Feature Layer/desc",
    "summaryDesc": "record/ Feature Layer/summaryDesc",
    "details": [
        {
            "title": "Parser",
            "desc": "record/ Feature Layer/detail/Parser/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "style",
            "desc": "record/ Feature Layer/input/style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "defaultStyle",
            "desc": "record/ Feature Layer/input/defaultStyle/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "features",
            "desc": "record/ Feature Layer/input/features/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "renderAsSvg",
            "desc": "record/ Feature Layer/input/renderAsSvg/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
},
{
    "title": "record/ Tiled Wms Layer/title",
    "desc": "record/ Tiled Wms Layer/desc",
    "summaryDesc": "record/ Tiled Wms Layer/summaryDesc",
    "details": [
        
    ],
    "input": [
        {
            "title": "imageFormat",
            "desc": "record/ Tiled Wms Layer/input/imageFormat/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "styles",
            "desc": "record/ Tiled Wms Layer/input/styles/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "baseURL",
            "desc": "record/ Tiled Wms Layer/input/baseURL/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "useNativeAngle",
            "desc": "record/ Tiled Wms Layer/input/useNativeAngle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "customParams",
            "desc": "record/ Tiled Wms Layer/input/customParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "version",
            "desc": "record/ Tiled Wms Layer/input/version/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "tileSize",
            "desc": "record/ Tiled Wms Layer/input/tileSize/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "mergeableParams",
            "desc": "record/ Tiled Wms Layer/input/mergeableParams/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "rasterStyle",
            "desc": "record/ Tiled Wms Layer/input/rasterStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "opacity",
            "desc": "record/ Tiled Wms Layer/input/opacity/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "layers",
            "desc": "record/ Tiled Wms Layer/input/layers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": true
}
];

docs.outputFormats = [{
    "title": "image/tif",
    "desc": "record/image/tif/desc",
    "summaryDesc": "record/image/tif/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "application/pdf",
    "desc": "record/application/pdf/desc",
    "summaryDesc": "record/application/pdf/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "image/gif",
    "desc": "record/image/gif/desc",
    "summaryDesc": "record/image/gif/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "image/tiff",
    "desc": "record/image/tiff/desc",
    "summaryDesc": "record/image/tiff/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "image/bmp",
    "desc": "record/image/bmp/desc",
    "summaryDesc": "record/image/bmp/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "image/png",
    "desc": "record/image/png/desc",
    "summaryDesc": "record/image/png/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
}
];

docs.fileLoaders = [{
    "title": "servlet",
    "desc": "record/servlet/desc",
    "summaryDesc": "record/servlet/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "file",
    "desc": "record/file/desc",
    "summaryDesc": "record/file/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "classpath",
    "desc": "record/classpath/desc",
    "summaryDesc": "record/classpath/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
}
];

docs.config = [{
    "title": "andAssertion",
    "desc": "record/andAssertion/desc",
    "summaryDesc": "record/andAssertion/summaryDesc",
    "details": [
        {
            "title": "Predicates",
            "desc": "record/andAssertion/detail/Predicates/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!localMatch",
    "desc": "record/!localMatch/desc",
    "summaryDesc": "record/!localMatch/summaryDesc",
    "details": [
        {
            "title": "Path Regex",
            "desc": "record/!localMatch/detail/Path Regex/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Port",
            "desc": "record/!localMatch/detail/Port/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!template",
    "desc": "record/!template/desc",
    "summaryDesc": "record/!template/summaryDesc",
    "details": [
        {
            "title": "Access",
            "desc": "record/!template/detail/Access/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Attributes",
            "desc": "record/!template/detail/Attributes/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Configuration",
            "desc": "record/!template/detail/Configuration/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Jdbc Password",
            "desc": "record/!template/detail/Jdbc Password/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Jdbc Url",
            "desc": "record/!template/detail/Jdbc Url/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Jdbc User",
            "desc": "record/!template/detail/Jdbc User/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Filename",
            "desc": "record/!template/detail/Output Filename/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Pdf Config",
            "desc": "record/!template/detail/Pdf Config/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Processors",
            "desc": "record/!template/detail/Processors/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Report Template",
            "desc": "record/!template/detail/Report Template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Styles",
            "desc": "record/!template/detail/Styles/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Table Data",
            "desc": "record/!template/detail/Table Data/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!dnsMatch",
    "desc": "record/!dnsMatch/desc",
    "summaryDesc": "record/!dnsMatch/summaryDesc",
    "details": [
        {
            "title": "Host",
            "desc": "record/!dnsMatch/detail/Host/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Path Regex",
            "desc": "record/!dnsMatch/detail/Path Regex/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Port",
            "desc": "record/!dnsMatch/detail/Port/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!urlImage",
    "desc": "record/!urlImage/desc",
    "summaryDesc": "record/!urlImage/summaryDesc",
    "details": [
        {
            "title": "Url Extractor",
            "desc": "record/!urlImage/detail/Url Extractor/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Url Group",
            "desc": "record/!urlImage/detail/Url Group/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!pdfConfig",
    "desc": "record/!pdfConfig/desc",
    "summaryDesc": "record/!pdfConfig/summaryDesc",
    "details": [
        {
            "title": "Author",
            "desc": "record/!pdfConfig/detail/Author/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Compressed",
            "desc": "record/!pdfConfig/detail/Compressed/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Creator",
            "desc": "record/!pdfConfig/detail/Creator/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Keywords",
            "desc": "record/!pdfConfig/detail/Keywords/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Subject",
            "desc": "record/!pdfConfig/detail/Subject/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Title",
            "desc": "record/!pdfConfig/detail/Title/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!zoomLevels",
    "desc": "record/!zoomLevels/desc",
    "summaryDesc": "record/!zoomLevels/summaryDesc",
    "details": [
        {
            "title": "Scales",
            "desc": "record/!zoomLevels/detail/Scales/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!mergeSource",
    "desc": "record/!mergeSource/desc",
    "summaryDesc": "record/!mergeSource/summaryDesc",
    "details": [
        {
            "title": "Fields",
            "desc": "record/!mergeSource/detail/Fields/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Key",
            "desc": "record/!mergeSource/detail/Key/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Type",
            "desc": "record/!mergeSource/detail/Type/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "roleAccessAssertion",
    "desc": "record/roleAccessAssertion/desc",
    "summaryDesc": "record/roleAccessAssertion/summaryDesc",
    "details": [
        {
            "title": "Required Roles",
            "desc": "record/roleAccessAssertion/detail/Required Roles/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "alwaysAllowedAssertion",
    "desc": "record/alwaysAllowedAssertion/desc",
    "summaryDesc": "record/alwaysAllowedAssertion/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!acceptAll",
    "desc": "record/!acceptAll/desc",
    "summaryDesc": "record/!acceptAll/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!credential",
    "desc": "record/!credential/desc",
    "summaryDesc": "record/!credential/summaryDesc",
    "details": [
        {
            "title": "Matchers",
            "desc": "record/!credential/detail/Matchers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Password",
            "desc": "record/!credential/detail/Password/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Username",
            "desc": "record/!credential/detail/Username/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!updatePdfConfigUpdate",
    "desc": "record/!updatePdfConfigUpdate/desc",
    "summaryDesc": "record/!updatePdfConfigUpdate/summaryDesc",
    "details": [
        {
            "title": "Format",
            "desc": "record/!updatePdfConfigUpdate/detail/Format/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Value Key",
            "desc": "record/!updatePdfConfigUpdate/detail/Value Key/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!ipMatch",
    "desc": "record/!ipMatch/desc",
    "summaryDesc": "record/!ipMatch/summaryDesc",
    "details": [
        {
            "title": "Ip",
            "desc": "record/!ipMatch/detail/Ip/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Mask",
            "desc": "record/!ipMatch/detail/Mask/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Path Regex",
            "desc": "record/!ipMatch/detail/Path Regex/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Port",
            "desc": "record/!ipMatch/detail/Port/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!certificateStore",
    "desc": "record/!certificateStore/desc",
    "summaryDesc": "record/!certificateStore/summaryDesc",
    "details": [
        {
            "title": "Configuration",
            "desc": "record/!certificateStore/detail/Configuration/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Password",
            "desc": "record/!certificateStore/detail/Password/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Uri",
            "desc": "record/!certificateStore/detail/Uri/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!proxy",
    "desc": "record/!proxy/desc",
    "summaryDesc": "record/!proxy/summaryDesc",
    "details": [
        {
            "title": "Host",
            "desc": "record/!proxy/detail/Host/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Matchers",
            "desc": "record/!proxy/detail/Matchers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Password",
            "desc": "record/!proxy/detail/Password/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Port",
            "desc": "record/!proxy/detail/Port/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Scheme",
            "desc": "record/!proxy/detail/Scheme/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Username",
            "desc": "record/!proxy/detail/Username/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
}
];

docs.styles = [{
    "title": "mapfishJsonParser",
    "desc": "record/mapfishJsonParser/desc",
    "summaryDesc": "record/mapfishJsonParser/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "sldParser",
    "desc": "record/sldParser/desc",
    "summaryDesc": "record/sldParser/summaryDesc",
    "details": [
        
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
}
];

docs.attributes = [{
    "title": "!datasource",
    "desc": "record/!datasource/desc",
    "summaryDesc": "record/!datasource/summaryDesc",
    "details": [
        {
            "title": "Attributes",
            "desc": "record/!datasource/detail/Attributes/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Config Name",
            "desc": "record/!datasource/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!datasource/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!integer",
    "desc": "record/!integer/desc",
    "summaryDesc": "record/!integer/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!integer/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!integer/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!legend",
    "desc": "record/!legend/desc",
    "summaryDesc": "record/!legend/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!legend/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!legend/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "classes",
            "desc": "record/!legend/input/classes/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "name",
            "desc": "record/!legend/input/name/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "icons",
            "desc": "record/!legend/input/icons/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!scalebar",
    "desc": "record/!scalebar/desc",
    "summaryDesc": "record/!scalebar/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!scalebar/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!scalebar/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Height",
            "desc": "record/!scalebar/detail/Height/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Width",
            "desc": "record/!scalebar/detail/Width/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "subIntervals",
            "desc": "record/!scalebar/input/subIntervals/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "color",
            "desc": "record/!scalebar/input/color/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "unit",
            "desc": "record/!scalebar/input/unit/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "verticalAlign",
            "desc": "record/!scalebar/input/verticalAlign/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "type",
            "desc": "record/!scalebar/input/type/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "padding",
            "desc": "record/!scalebar/input/padding/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "fontSize",
            "desc": "record/!scalebar/input/fontSize/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "barSize",
            "desc": "record/!scalebar/input/barSize/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "lockUnits",
            "desc": "record/!scalebar/input/lockUnits/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "renderAsSvg",
            "desc": "record/!scalebar/input/renderAsSvg/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "lineWidth",
            "desc": "record/!scalebar/input/lineWidth/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "intervals",
            "desc": "record/!scalebar/input/intervals/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "backgroundColor",
            "desc": "record/!scalebar/input/backgroundColor/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "labelDistance",
            "desc": "record/!scalebar/input/labelDistance/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "font",
            "desc": "record/!scalebar/input/font/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "align",
            "desc": "record/!scalebar/input/align/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "barBgColor",
            "desc": "record/!scalebar/input/barBgColor/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "orientation",
            "desc": "record/!scalebar/input/orientation/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "fontColor",
            "desc": "record/!scalebar/input/fontColor/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!float",
    "desc": "record/!float/desc",
    "summaryDesc": "record/!float/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!float/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!float/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!string",
    "desc": "record/!string/desc",
    "summaryDesc": "record/!string/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!string/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!string/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!northArrow",
    "desc": "record/!northArrow/desc",
    "summaryDesc": "record/!northArrow/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!northArrow/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!northArrow/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Size",
            "desc": "record/!northArrow/detail/Size/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "graphic",
            "desc": "record/!northArrow/input/graphic/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "backgroundColor",
            "desc": "record/!northArrow/input/backgroundColor/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!stringArray",
    "desc": "record/!stringArray/desc",
    "summaryDesc": "record/!stringArray/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!stringArray/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!stringArray/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!overviewMap",
    "desc": "record/!overviewMap/desc",
    "summaryDesc": "record/!overviewMap/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!overviewMap/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!overviewMap/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Dpi Suggestions",
            "desc": "record/!overviewMap/detail/Dpi Suggestions/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Height",
            "desc": "record/!overviewMap/detail/Height/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Max Dpi",
            "desc": "record/!overviewMap/detail/Max Dpi/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Style",
            "desc": "record/!overviewMap/detail/Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Width",
            "desc": "record/!overviewMap/detail/Width/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Factor",
            "desc": "record/!overviewMap/detail/Zoom Factor/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Level Snap Strategy",
            "desc": "record/!overviewMap/detail/Zoom Level Snap Strategy/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Levels",
            "desc": "record/!overviewMap/detail/Zoom Levels/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Snap Tolerance",
            "desc": "record/!overviewMap/detail/Zoom Snap Tolerance/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "rotation",
            "desc": "record/!overviewMap/input/rotation/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "projection",
            "desc": "record/!overviewMap/input/projection/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "dpiSensitiveStyle",
            "desc": "record/!overviewMap/input/dpiSensitiveStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "dpi",
            "desc": "record/!overviewMap/input/dpi/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "useNearestScale",
            "desc": "record/!overviewMap/input/useNearestScale/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "layers",
            "desc": "record/!overviewMap/input/layers/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "longitudeFirst",
            "desc": "record/!overviewMap/input/longitudeFirst/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "useAdjustBounds",
            "desc": "record/!overviewMap/input/useAdjustBounds/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!style",
    "desc": "record/!style/desc",
    "summaryDesc": "record/!style/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!style/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!style/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "style",
            "desc": "record/!style/input/style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!table",
    "desc": "record/!table/desc",
    "summaryDesc": "record/!table/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!table/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!table/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "data",
            "desc": "record/!table/input/data/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "columns",
            "desc": "record/!table/input/columns/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!features",
    "desc": "record/!features/desc",
    "summaryDesc": "record/!features/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!features/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!features/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "features",
            "desc": "record/!features/input/features/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "longitudeFirst",
            "desc": "record/!features/input/longitudeFirst/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!map",
    "desc": "record/!map/desc",
    "summaryDesc": "record/!map/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!map/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!map/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Dpi Suggestions",
            "desc": "record/!map/detail/Dpi Suggestions/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Height",
            "desc": "record/!map/detail/Height/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Max Dpi",
            "desc": "record/!map/detail/Max Dpi/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Width",
            "desc": "record/!map/detail/Width/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Level Snap Strategy",
            "desc": "record/!map/detail/Zoom Level Snap Strategy/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Levels",
            "desc": "record/!map/detail/Zoom Levels/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Zoom Snap Tolerance",
            "desc": "record/!map/detail/Zoom Snap Tolerance/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "center",
            "desc": "record/!map/input/center/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.Requires(value=[scale])",
                "@org.mapfish.print.parser.OneOf(value=MapBounds)"
            ]
        },
        {
            "title": "scale",
            "desc": "record/!map/input/scale/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "rotation",
            "desc": "record/!map/input/rotation/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "bbox",
            "desc": "record/!map/input/bbox/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.OneOf(value=MapBounds)"
            ]
        },
        {
            "title": "projection",
            "desc": "record/!map/input/projection/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "layers",
            "desc": "record/!map/input/layers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "dpiSensitiveStyle",
            "desc": "record/!map/input/dpiSensitiveStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "useNearestScale",
            "desc": "record/!map/input/useNearestScale/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "dpi",
            "desc": "record/!map/input/dpi/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "longitudeFirst",
            "desc": "record/!map/input/longitudeFirst/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "areaOfInterest",
            "desc": "record/!map/input/areaOfInterest/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.CanSatisfyOneOf(value=MapBounds)"
            ]
        },
        {
            "title": "useAdjustBounds",
            "desc": "record/!map/input/useAdjustBounds/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!paging",
    "desc": "record/!paging/desc",
    "summaryDesc": "record/!paging/summaryDesc",
    "details": [
        {
            "title": "Config Name",
            "desc": "record/!paging/detail/Config Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Default",
            "desc": "record/!paging/detail/Default/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "aoiStyle",
            "desc": "record/!paging/input/aoiStyle/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "aoiDisplay",
            "desc": "record/!paging/input/aoiDisplay/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "overlap",
            "desc": "record/!paging/input/overlap/desc",
            "required": true,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.parser.HasDefaultValue()"
            ]
        },
        {
            "title": "scale",
            "desc": "record/!paging/input/scale/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
}
];

docs.processors = [{
    "title": "!setFeatures",
    "desc": "record/!setFeatures/desc",
    "summaryDesc": "record/!setFeatures/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!setFeatures/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!setFeatures/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!setFeatures/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "features",
            "desc": "record/!setFeatures/input/features/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "map",
            "desc": "record/!setFeatures/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!setFeatures/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!mapUri",
    "desc": "record/!mapUri/desc",
    "summaryDesc": "record/!mapUri/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!mapUri/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Mapping",
            "desc": "record/!mapUri/detail/Mapping/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!mapUri/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!mapUri/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!mapUri/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!mapUri/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!setStyle",
    "desc": "record/!setStyle/desc",
    "summaryDesc": "record/!setStyle/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!setStyle/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!setStyle/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!setStyle/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "map",
            "desc": "record/!setStyle/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "style",
            "desc": "record/!setStyle/input/style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!setStyle/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!createDataSource",
    "desc": "record/!createDataSource/desc",
    "summaryDesc": "record/!createDataSource/summaryDesc",
    "details": [
        {
            "title": "Attributes",
            "desc": "record/!createDataSource/detail/Attributes/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!createDataSource/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createDataSource/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createDataSource/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Processors",
            "desc": "record/!createDataSource/detail/Processors/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Report Key",
            "desc": "record/!createDataSource/detail/Report Key/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Report Template",
            "desc": "record/!createDataSource/detail/Report Template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "datasource",
            "desc": "record/!createDataSource/input/datasource/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "template",
            "desc": "record/!createDataSource/input/template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "values",
            "desc": "record/!createDataSource/input/values/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        {
            "title": "jrDataSource",
            "desc": "record/!createDataSource/output/jrDataSource/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!createNorthArrow",
    "desc": "record/!createNorthArrow/desc",
    "summaryDesc": "record/!createNorthArrow/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!createNorthArrow/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createNorthArrow/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createNorthArrow/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "tempTaskDirectory",
            "desc": "record/!createNorthArrow/input/tempTaskDirectory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!createNorthArrow/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "northArrow",
            "desc": "record/!createNorthArrow/input/northArrow/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "map",
            "desc": "record/!createNorthArrow/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "subReport",
            "desc": "record/!createNorthArrow/output/subReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "graphic",
            "desc": "record/!createNorthArrow/output/graphic/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!createScalebar",
    "desc": "record/!createScalebar/desc",
    "summaryDesc": "record/!createScalebar/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!createScalebar/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createScalebar/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createScalebar/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "scalebar",
            "desc": "record/!createScalebar/input/scalebar/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "map",
            "desc": "record/!createScalebar/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "template",
            "desc": "record/!createScalebar/input/template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "tempTaskDirectory",
            "desc": "record/!createScalebar/input/tempTaskDirectory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        {
            "title": "graphic",
            "desc": "record/!createScalebar/output/graphic/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "subReport",
            "desc": "record/!createScalebar/output/subReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!prepareLegend",
    "desc": "record/!prepareLegend/desc",
    "summaryDesc": "record/!prepareLegend/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!prepareLegend/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!prepareLegend/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!prepareLegend/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Template",
            "desc": "record/!prepareLegend/detail/Template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "legend",
            "desc": "record/!prepareLegend/input/legend/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!prepareLegend/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "template",
            "desc": "record/!prepareLegend/input/template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        {
            "title": "legendSubReport",
            "desc": "record/!prepareLegend/output/legendSubReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "numberOfLegendRows",
            "desc": "record/!prepareLegend/output/numberOfLegendRows/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "legend",
            "desc": "record/!prepareLegend/output/legend/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!updatePdfConfig",
    "desc": "record/!updatePdfConfig/desc",
    "summaryDesc": "record/!updatePdfConfig/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!updatePdfConfig/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!updatePdfConfig/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!updatePdfConfig/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Updates",
            "desc": "record/!updatePdfConfig/detail/Updates/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "pdfConfig",
            "desc": "record/!updatePdfConfig/input/pdfConfig/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "values",
            "desc": "record/!updatePdfConfig/input/values/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!createMapPages",
    "desc": "record/!createMapPages/desc",
    "summaryDesc": "record/!createMapPages/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!createMapPages/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createMapPages/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createMapPages/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "map",
            "desc": "record/!createMapPages/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "paging",
            "desc": "record/!createMapPages/input/paging/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "maps",
            "desc": "record/!createMapPages/output/maps/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!prepareTable",
    "desc": "record/!prepareTable/desc",
    "summaryDesc": "record/!prepareTable/summaryDesc",
    "details": [
        {
            "title": "Columns",
            "desc": "record/!prepareTable/detail/Columns/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Converters",
            "desc": "record/!prepareTable/detail/Converters/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Detail Style",
            "desc": "record/!prepareTable/detail/Detail Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Dynamic",
            "desc": "record/!prepareTable/detail/Dynamic/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Exclude Columns",
            "desc": "record/!prepareTable/detail/Exclude Columns/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "First Detail Style",
            "desc": "record/!prepareTable/detail/First Detail Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "First Header Style",
            "desc": "record/!prepareTable/detail/First Header Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Header Style",
            "desc": "record/!prepareTable/detail/Header Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!prepareTable/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Jasper Template",
            "desc": "record/!prepareTable/detail/Jasper Template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Last Detail Style",
            "desc": "record/!prepareTable/detail/Last Detail Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Last Header Style",
            "desc": "record/!prepareTable/detail/Last Header Style/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Max Columns",
            "desc": "record/!prepareTable/detail/Max Columns/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!prepareTable/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!prepareTable/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "table",
            "desc": "record/!prepareTable/input/table/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "tempTaskDirectory",
            "desc": "record/!prepareTable/input/tempTaskDirectory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "template",
            "desc": "record/!prepareTable/input/template/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!prepareTable/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        {
            "title": "table",
            "desc": "record/!prepareTable/output/table/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "numberOfTableRows",
            "desc": "record/!prepareTable/output/numberOfTableRows/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "tableSubReport",
            "desc": "record/!prepareTable/output/tableSubReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!addHeaders",
    "desc": "record/!addHeaders/desc",
    "summaryDesc": "record/!addHeaders/summaryDesc",
    "details": [
        {
            "title": "Headers",
            "desc": "record/!addHeaders/detail/Headers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!addHeaders/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!addHeaders/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!addHeaders/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!addHeaders/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!addHeaders/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!configureHttpRequests",
    "desc": "record/!configureHttpRequests/desc",
    "summaryDesc": "record/!configureHttpRequests/summaryDesc",
    "details": [
        {
            "title": "Http Processors",
            "desc": "record/!configureHttpRequests/detail/Http Processors/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!configureHttpRequests/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!configureHttpRequests/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!configureHttpRequests/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "TEMPLATE_KEY",
            "desc": "record/!configureHttpRequests/input/TEMPLATE_KEY/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "CLIENT_HTTP_REQUEST_FACTORY_KEY",
            "desc": "record/!configureHttpRequests/input/CLIENT_HTTP_REQUEST_FACTORY_KEY/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "TASK_DIRECTORY_KEY",
            "desc": "record/!configureHttpRequests/input/TASK_DIRECTORY_KEY/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "PDF_CONFIG",
            "desc": "record/!configureHttpRequests/input/PDF_CONFIG/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!configureHttpRequests/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!mergeDataSources",
    "desc": "record/!mergeDataSources/desc",
    "summaryDesc": "record/!mergeDataSources/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!mergeDataSources/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!mergeDataSources/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!mergeDataSources/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Sources",
            "desc": "record/!mergeDataSources/detail/Sources/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "values",
            "desc": "record/!mergeDataSources/input/values/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "output": [
        {
            "title": "mergedDataSource",
            "desc": "record/!mergeDataSources/output/mergedDataSource/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!createOverviewMap",
    "desc": "record/!createOverviewMap/desc",
    "summaryDesc": "record/!createOverviewMap/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!createOverviewMap/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createOverviewMap/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createOverviewMap/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "map",
            "desc": "record/!createOverviewMap/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!createOverviewMap/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "tempTaskDirectory",
            "desc": "record/!createOverviewMap/input/tempTaskDirectory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "overviewMap",
            "desc": "record/!createOverviewMap/input/overviewMap/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "layerGraphics",
            "desc": "record/!createOverviewMap/output/layerGraphics/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        },
        {
            "title": "overviewMapSubReport",
            "desc": "record/!createOverviewMap/output/overviewMapSubReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!setWmsCustomParam",
    "desc": "record/!setWmsCustomParam/desc",
    "summaryDesc": "record/!setWmsCustomParam/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!setWmsCustomParam/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!setWmsCustomParam/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!setWmsCustomParam/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Param Name",
            "desc": "record/!setWmsCustomParam/detail/Param Name/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "value",
            "desc": "record/!setWmsCustomParam/input/value/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "map",
            "desc": "record/!setWmsCustomParam/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!reportBuilder",
    "desc": "record/!reportBuilder/desc",
    "summaryDesc": "record/!reportBuilder/summaryDesc",
    "details": [
        {
            "title": "Configuration",
            "desc": "record/!reportBuilder/detail/Configuration/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Directory",
            "desc": "record/!reportBuilder/detail/Directory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!reportBuilder/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!reportBuilder/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!reportBuilder/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        
    ],
    "output": [
        
    ],
    "translateTitle": false
},
{
    "title": "!forwardHeaders",
    "desc": "record/!forwardHeaders/desc",
    "summaryDesc": "record/!forwardHeaders/summaryDesc",
    "details": [
        {
            "title": "All",
            "desc": "record/!forwardHeaders/detail/All/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Headers",
            "desc": "record/!forwardHeaders/detail/Headers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!forwardHeaders/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!forwardHeaders/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!forwardHeaders/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!forwardHeaders/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "requestHeaders",
            "desc": "record/!forwardHeaders/input/requestHeaders/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!forwardHeaders/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!restrictUris",
    "desc": "record/!restrictUris/desc",
    "summaryDesc": "record/!restrictUris/summaryDesc",
    "details": [
        {
            "title": "Input Mapper",
            "desc": "record/!restrictUris/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Matchers",
            "desc": "record/!restrictUris/detail/Matchers/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!restrictUris/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!restrictUris/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!restrictUris/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!restrictUris/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!createMap",
    "desc": "record/!createMap/desc",
    "summaryDesc": "record/!createMap/summaryDesc",
    "details": [
        {
            "title": "Image Type",
            "desc": "record/!createMap/detail/Image Type/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!createMap/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!createMap/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!createMap/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "map",
            "desc": "record/!createMap/input/map/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!createMap/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "tempTaskDirectory",
            "desc": "record/!createMap/input/tempTaskDirectory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "mapSubReport",
            "desc": "record/!createMap/output/mapSubReport/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "mapContext",
            "desc": "record/!createMap/output/mapContext/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "layerGraphics",
            "desc": "record/!createMap/output/layerGraphics/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                "@org.mapfish.print.processor.InternalValue()"
            ]
        }
    ],
    "translateTitle": false
},
{
    "title": "!useHttpForHttps",
    "desc": "record/!useHttpForHttps/desc",
    "summaryDesc": "record/!useHttpForHttps/summaryDesc",
    "details": [
        {
            "title": "Hosts",
            "desc": "record/!useHttpForHttps/detail/Hosts/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Input Mapper",
            "desc": "record/!useHttpForHttps/detail/Input Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Mapper",
            "desc": "record/!useHttpForHttps/detail/Output Mapper/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Output Prefix",
            "desc": "record/!useHttpForHttps/detail/Output Prefix/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        },
        {
            "title": "Port Mapping",
            "desc": "record/!useHttpForHttps/detail/Port Mapping/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "input": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!useHttpForHttps/input/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "output": [
        {
            "title": "clientHttpRequestFactory",
            "desc": "record/!useHttpForHttps/output/clientHttpRequestFactory/desc",
            "required": false,
            "translateTitle": false,
            "annotations": [
                
            ]
        }
    ],
    "translateTitle": false
}
];

