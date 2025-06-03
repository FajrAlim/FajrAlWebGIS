var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Rute_1 = new ol.format.GeoJSON();
var features_Rute_1 = format_Rute_1.readFeatures(json_Rute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_1.addFeatures(features_Rute_1);
var lyr_Rute_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_1, 
                style: style_Rute_1,
                popuplayertitle: 'Rute',
                interactive: true,
                title: '<img src="styles/legend/Rute_1.png" /> Rute'
            });
var format_combined_gpx_2 = new ol.format.GeoJSON();
var features_combined_gpx_2 = format_combined_gpx_2.readFeatures(json_combined_gpx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_combined_gpx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_combined_gpx_2.addFeatures(features_combined_gpx_2);
var lyr_combined_gpx_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_combined_gpx_2, 
                style: style_combined_gpx_2,
                popuplayertitle: 'combined_gpx',
                interactive: true,
                title: '<img src="styles/legend/combined_gpx_2.png" /> combined_gpx'
            });
var format_Jarak_3 = new ol.format.GeoJSON();
var features_Jarak_3 = format_Jarak_3.readFeatures(json_Jarak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jarak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jarak_3.addFeatures(features_Jarak_3);
var lyr_Jarak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jarak_3, 
                style: style_Jarak_3,
                popuplayertitle: 'Jarak',
                interactive: true,
                title: '<img src="styles/legend/Jarak_3.png" /> Jarak'
            });
var format_PoI_4 = new ol.format.GeoJSON();
var features_PoI_4 = format_PoI_4.readFeatures(json_PoI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoI_4.addFeatures(features_PoI_4);
var lyr_PoI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoI_4, 
                style: style_PoI_4,
                popuplayertitle: 'PoI',
                interactive: true,
                title: '<img src="styles/legend/PoI_4.png" /> PoI'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_Rute_1.setVisible(true);lyr_combined_gpx_2.setVisible(true);lyr_Jarak_3.setVisible(true);lyr_PoI_4.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_Rute_1,lyr_combined_gpx_2,lyr_Jarak_3,lyr_PoI_4];
lyr_Rute_1.set('fieldAliases', {'fid': 'fid', });
lyr_combined_gpx_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'file_name': 'file_name', 'panjang': 'panjang', });
lyr_Jarak_3.set('fieldAliases', {'fid': 'fid', 'cngmeters': 'cngmeters', });
lyr_PoI_4.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', });
lyr_Rute_1.set('fieldImages', {'fid': '', });
lyr_combined_gpx_2.set('fieldImages', {'fid': '', 'id': '', 'name': 'TextEdit', 'file_name': '', 'panjang': '', });
lyr_Jarak_3.set('fieldImages', {'fid': '', 'cngmeters': '', });
lyr_PoI_4.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rute_1.set('fieldLabels', {'fid': 'no label', });
lyr_combined_gpx_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'file_name': 'no label', 'panjang': 'no label', });
lyr_Jarak_3.set('fieldLabels', {'fid': 'no label', 'cngmeters': 'no label', });
lyr_PoI_4.set('fieldLabels', {'fid': 'no label', 'nama': 'no label', });
lyr_PoI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});