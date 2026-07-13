var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LuasBaku_1 = new ol.format.GeoJSON();
var features_LuasBaku_1 = format_LuasBaku_1.readFeatures(json_LuasBaku_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuasBaku_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasBaku_1.addFeatures(features_LuasBaku_1);
var lyr_LuasBaku_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasBaku_1, 
                style: style_LuasBaku_1,
                popuplayertitle: 'Luas Baku',
                interactive: true,
                title: '<img src="styles/legend/LuasBaku_1.png" /> Luas Baku'
            });
var format_LuasFungsional_2 = new ol.format.GeoJSON();
var features_LuasFungsional_2 = format_LuasFungsional_2.readFeatures(json_LuasFungsional_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuasFungsional_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasFungsional_2.addFeatures(features_LuasFungsional_2);
var lyr_LuasFungsional_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasFungsional_2, 
                style: style_LuasFungsional_2,
                popuplayertitle: 'Luas Fungsional',
                interactive: true,
                title: '<img src="styles/legend/LuasFungsional_2.png" /> Luas Fungsional'
            });
var format_JalanAlosika_3 = new ol.format.GeoJSON();
var features_JalanAlosika_3 = format_JalanAlosika_3.readFeatures(json_JalanAlosika_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanAlosika_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanAlosika_3.addFeatures(features_JalanAlosika_3);
var lyr_JalanAlosika_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanAlosika_3, 
                style: style_JalanAlosika_3,
                popuplayertitle: 'Jalan Alosika',
                interactive: true,
    title: 'Jalan Alosika<br />\
    <img src="styles/legend/JalanAlosika_3_0.png" /> Baik<br />\
    <img src="styles/legend/JalanAlosika_3_1.png" /> Baik Sekali<br />\
    <img src="styles/legend/JalanAlosika_3_2.png" /> Jelek<br />\
    <img src="styles/legend/JalanAlosika_3_3.png" /> Sedang<br />' });
var format_SaluranAlosika_4 = new ol.format.GeoJSON();
var features_SaluranAlosika_4 = format_SaluranAlosika_4.readFeatures(json_SaluranAlosika_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaluranAlosika_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranAlosika_4.addFeatures(features_SaluranAlosika_4);
var lyr_SaluranAlosika_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranAlosika_4, 
                style: style_SaluranAlosika_4,
                popuplayertitle: 'Saluran Alosika',
                interactive: true,
    title: 'Saluran Alosika<br />\
    <img src="styles/legend/SaluranAlosika_4_0.png" /> Baik<br />\
    <img src="styles/legend/SaluranAlosika_4_1.png" /> Baik Sekali<br />\
    <img src="styles/legend/SaluranAlosika_4_2.png" /> Jelek<br />\
    <img src="styles/legend/SaluranAlosika_4_3.png" /> Sedang<br />' });
var format_BangunanAlosika_5 = new ol.format.GeoJSON();
var features_BangunanAlosika_5 = format_BangunanAlosika_5.readFeatures(json_BangunanAlosika_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanAlosika_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanAlosika_5.addFeatures(features_BangunanAlosika_5);
cluster_BangunanAlosika_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BangunanAlosika_5
});
var lyr_BangunanAlosika_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BangunanAlosika_5, 
                style: style_BangunanAlosika_5,
                popuplayertitle: 'Bangunan Alosika',
                interactive: true,
    title: 'Bangunan Alosika<br />\
    <img src="styles/legend/BangunanAlosika_5_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/BangunanAlosika_5_1.png" /> Baik<br />\
    <img src="styles/legend/BangunanAlosika_5_2.png" /> Sedang<br />\
    <img src="styles/legend/BangunanAlosika_5_3.png" /> Jelek<br />' });
var group_Alosika = new ol.layer.Group({
                                layers: [lyr_JalanAlosika_3,lyr_SaluranAlosika_4,lyr_BangunanAlosika_5,],
                                fold: 'open',
                                title: 'Alosika'});

lyr_GoogleSatellite_0.setVisible(true);lyr_LuasBaku_1.setVisible(false);lyr_LuasFungsional_2.setVisible(false);lyr_JalanAlosika_3.setVisible(false);lyr_SaluranAlosika_4.setVisible(true);lyr_BangunanAlosika_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LuasBaku_1,lyr_LuasFungsional_2,group_Alosika];
lyr_LuasBaku_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Attrib': 'FID_Attrib', 'Id': 'Id', 'FID_pusat1': 'FID_pusat1', 'Nm_Inf': 'Nm_Inf', 'Luas_Ha': 'Luas_Ha', 'Thn_Dat': 'Thn_Dat', 'Nama_WS': 'Nama_WS', 'Nama_DAS': 'Nama_DAS', 'Irigasi': 'Irigasi', 'Jenis_DI': 'Jenis_DI', 'Bgn_UTM': 'Bgn_UTM', 'Nm_Bgn_Utm': 'Nm_Bgn_Utm', 'Smb_Air': 'Smb_Air', 'Kewenangan': 'Kewenangan', 'L_Renc': 'L_Renc', 'Luas_Pot': 'Luas_Pot', 'Luas_Fung': 'Luas_Fung', 'P_Sal_Ind': 'P_Sal_Ind', 'Ko_Sal_Ind': 'Ko_Sal_Ind', 'P_Sal_Sek': 'P_Sal_Sek', 'Ko_Sal_Sek': 'Ko_Sal_Sek', 'Pjn_Sal_Te': 'Pjn_Sal_Te', 'Kon_Sal_Te': 'Kon_Sal_Te', 'P_Sal_Pem': 'P_Sal_Pem', 'Ko_Sal_Pe': 'Ko_Sal_Pe', 'P_Sal_Sup': 'P_Sal_Sup', 'Ko_Sal_Sup': 'Ko_Sal_Sup', 'Jml_Kl_Ps': 'Jml_Kl_Ps', 'Kon_Kl_Ps': 'Kon_Kl_Ps', 'Jml_Bg_Bag': 'Jml_Bg_Bag', 'Kon_Bg_Bag': 'Kon_Bg_Bag', 'Jml_Bg_B_S': 'Jml_Bg_B_S', 'Kon_Bg_B_S': 'Kon_Bg_B_S', 'Jml_Bg_Sad': 'Jml_Bg_Sad', 'Kon_Bg_Sad': 'Kon_Bg_Sad', 'Jml_Bg_Pen': 'Jml_Bg_Pen', 'Kon_Bg_Pen': 'Kon_Bg_Pen', 'Jml_Sip': 'Jml_Sip', 'Kon_Sip': 'Kon_Sip', 'Jml_Tlg': 'Jml_Tlg', 'Kon_Tlg': 'Kon_Tlg', 'Jml_Jmb': 'Jml_Jmb', 'Kon_Jmb': 'Kon_Jmb', 'Jml_plk': 'Jml_plk', 'Kon_plk': 'Kon_plk', 'Jml_P3A': 'Jml_P3A', 'Jml_A_GP3A': 'Jml_A_GP3A', 'Jml_A_P3A': 'Jml_A_P3A', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'Shape_Leng': 'Shape_Leng', 'Nm_Prov': 'Nm_Prov', 'Nm_Kab': 'Nm_Kab', 'Kewenang_1': 'Kewenang_1', 'Nm_Inf_1': 'Nm_Inf_1', 'Nm_Prov_1': 'Nm_Prov_1', 'Keterangan': 'Keterangan', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LuasFungsional_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Attrib': 'FID_Attrib', 'Id': 'Id', 'FID_pusat1': 'FID_pusat1', 'Nm_Inf': 'Nm_Inf', 'Luas_Ha': 'Luas_Ha', 'Thn_Dat': 'Thn_Dat', 'Nama_WS': 'Nama_WS', 'Nama_DAS': 'Nama_DAS', 'Irigasi': 'Irigasi', 'Jenis_DI': 'Jenis_DI', 'Bgn_UTM': 'Bgn_UTM', 'Nm_Bgn_Utm': 'Nm_Bgn_Utm', 'Smb_Air': 'Smb_Air', 'Kewenangan': 'Kewenangan', 'L_Renc': 'L_Renc', 'Luas_Pot': 'Luas_Pot', 'Luas_Fung': 'Luas_Fung', 'P_Sal_Ind': 'P_Sal_Ind', 'Ko_Sal_Ind': 'Ko_Sal_Ind', 'P_Sal_Sek': 'P_Sal_Sek', 'Ko_Sal_Sek': 'Ko_Sal_Sek', 'Pjn_Sal_Te': 'Pjn_Sal_Te', 'Kon_Sal_Te': 'Kon_Sal_Te', 'P_Sal_Pem': 'P_Sal_Pem', 'Ko_Sal_Pe': 'Ko_Sal_Pe', 'P_Sal_Sup': 'P_Sal_Sup', 'Ko_Sal_Sup': 'Ko_Sal_Sup', 'Jml_Kl_Ps': 'Jml_Kl_Ps', 'Kon_Kl_Ps': 'Kon_Kl_Ps', 'Jml_Bg_Bag': 'Jml_Bg_Bag', 'Kon_Bg_Bag': 'Kon_Bg_Bag', 'Jml_Bg_B_S': 'Jml_Bg_B_S', 'Kon_Bg_B_S': 'Kon_Bg_B_S', 'Jml_Bg_Sad': 'Jml_Bg_Sad', 'Kon_Bg_Sad': 'Kon_Bg_Sad', 'Jml_Bg_Pen': 'Jml_Bg_Pen', 'Kon_Bg_Pen': 'Kon_Bg_Pen', 'Jml_Sip': 'Jml_Sip', 'Kon_Sip': 'Kon_Sip', 'Jml_Tlg': 'Jml_Tlg', 'Kon_Tlg': 'Kon_Tlg', 'Jml_Jmb': 'Jml_Jmb', 'Kon_Jmb': 'Kon_Jmb', 'Jml_plk': 'Jml_plk', 'Kon_plk': 'Kon_plk', 'Jml_P3A': 'Jml_P3A', 'Jml_A_GP3A': 'Jml_A_GP3A', 'Jml_A_P3A': 'Jml_A_P3A', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'Shape_Leng': 'Shape_Leng', 'Nm_Prov': 'Nm_Prov', 'Nm_Kab': 'Nm_Kab', 'Kewenang_1': 'Kewenang_1', 'Nm_Inf_1': 'Nm_Inf_1', 'Nm_Prov_1': 'Nm_Prov_1', 'Keterangan': 'Keterangan', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_JalanAlosika_3.set('fieldAliases', {'nama': 'Nama', 'nomenklatu': 'Nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang (50m)', 'kon_sal_25': 'Kondisi Saluran', 'kon_jln_25': 'Kondisi Jalan', 'jenis': 'Jenis', 'foto': 'Foto', 'stas_awal': 'stas_awal', 'stas_akhir': 'stas_akhir', });
lyr_SaluranAlosika_4.set('fieldAliases', {'nama': 'Nama', 'nomenklatu': 'Nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang (50m)', 'kon_sal_25': 'Kondisi Saluran', 'kon_jln_25': 'Kondisi Jalan', 'jenis': 'Jenis', 'foto': 'Foto', 'stas_awal': 'Stasiun Awal', 'stas_akhir': 'Stasiun Akhir', });
lyr_BangunanAlosika_5.set('fieldAliases', {'nama': 'Nama', 'nomenklatu': 'Nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'kon_25': 'Kondisi Bangunan', 'jenis': 'jenis', 'foto': 'foto', });
lyr_LuasBaku_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Attrib': 'TextEdit', 'Id': 'TextEdit', 'FID_pusat1': 'TextEdit', 'Nm_Inf': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Thn_Dat': 'TextEdit', 'Nama_WS': 'TextEdit', 'Nama_DAS': 'TextEdit', 'Irigasi': 'TextEdit', 'Jenis_DI': 'TextEdit', 'Bgn_UTM': 'TextEdit', 'Nm_Bgn_Utm': 'TextEdit', 'Smb_Air': 'TextEdit', 'Kewenangan': 'TextEdit', 'L_Renc': 'TextEdit', 'Luas_Pot': 'TextEdit', 'Luas_Fung': 'TextEdit', 'P_Sal_Ind': 'TextEdit', 'Ko_Sal_Ind': 'TextEdit', 'P_Sal_Sek': 'TextEdit', 'Ko_Sal_Sek': 'TextEdit', 'Pjn_Sal_Te': 'TextEdit', 'Kon_Sal_Te': 'TextEdit', 'P_Sal_Pem': 'TextEdit', 'Ko_Sal_Pe': 'TextEdit', 'P_Sal_Sup': 'TextEdit', 'Ko_Sal_Sup': 'TextEdit', 'Jml_Kl_Ps': 'TextEdit', 'Kon_Kl_Ps': 'TextEdit', 'Jml_Bg_Bag': 'TextEdit', 'Kon_Bg_Bag': 'TextEdit', 'Jml_Bg_B_S': 'TextEdit', 'Kon_Bg_B_S': 'TextEdit', 'Jml_Bg_Sad': 'TextEdit', 'Kon_Bg_Sad': 'TextEdit', 'Jml_Bg_Pen': 'TextEdit', 'Kon_Bg_Pen': 'TextEdit', 'Jml_Sip': 'TextEdit', 'Kon_Sip': 'TextEdit', 'Jml_Tlg': 'TextEdit', 'Kon_Tlg': 'TextEdit', 'Jml_Jmb': 'TextEdit', 'Kon_Jmb': 'TextEdit', 'Jml_plk': 'TextEdit', 'Kon_plk': 'TextEdit', 'Jml_P3A': 'TextEdit', 'Jml_A_GP3A': 'TextEdit', 'Jml_A_P3A': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Nm_Prov': 'TextEdit', 'Nm_Kab': 'TextEdit', 'Kewenang_1': 'TextEdit', 'Nm_Inf_1': 'TextEdit', 'Nm_Prov_1': 'TextEdit', 'Keterangan': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LuasFungsional_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Attrib': 'TextEdit', 'Id': 'TextEdit', 'FID_pusat1': 'TextEdit', 'Nm_Inf': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Thn_Dat': 'TextEdit', 'Nama_WS': 'TextEdit', 'Nama_DAS': 'TextEdit', 'Irigasi': 'TextEdit', 'Jenis_DI': 'TextEdit', 'Bgn_UTM': 'TextEdit', 'Nm_Bgn_Utm': 'TextEdit', 'Smb_Air': 'TextEdit', 'Kewenangan': 'TextEdit', 'L_Renc': 'TextEdit', 'Luas_Pot': 'TextEdit', 'Luas_Fung': 'TextEdit', 'P_Sal_Ind': 'TextEdit', 'Ko_Sal_Ind': 'TextEdit', 'P_Sal_Sek': 'TextEdit', 'Ko_Sal_Sek': 'TextEdit', 'Pjn_Sal_Te': 'TextEdit', 'Kon_Sal_Te': 'TextEdit', 'P_Sal_Pem': 'TextEdit', 'Ko_Sal_Pe': 'TextEdit', 'P_Sal_Sup': 'TextEdit', 'Ko_Sal_Sup': 'TextEdit', 'Jml_Kl_Ps': 'TextEdit', 'Kon_Kl_Ps': 'TextEdit', 'Jml_Bg_Bag': 'TextEdit', 'Kon_Bg_Bag': 'TextEdit', 'Jml_Bg_B_S': 'TextEdit', 'Kon_Bg_B_S': 'TextEdit', 'Jml_Bg_Sad': 'TextEdit', 'Kon_Bg_Sad': 'TextEdit', 'Jml_Bg_Pen': 'TextEdit', 'Kon_Bg_Pen': 'TextEdit', 'Jml_Sip': 'TextEdit', 'Kon_Sip': 'TextEdit', 'Jml_Tlg': 'TextEdit', 'Kon_Tlg': 'TextEdit', 'Jml_Jmb': 'TextEdit', 'Kon_Jmb': 'TextEdit', 'Jml_plk': 'TextEdit', 'Kon_plk': 'TextEdit', 'Jml_P3A': 'TextEdit', 'Jml_A_GP3A': 'TextEdit', 'Jml_A_P3A': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Nm_Prov': 'TextEdit', 'Nm_Kab': 'TextEdit', 'Kewenang_1': 'TextEdit', 'Nm_Inf_1': 'TextEdit', 'Nm_Prov_1': 'TextEdit', 'Keterangan': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JalanAlosika_3.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'kon_sal_25': 'TextEdit', 'kon_jln_25': 'TextEdit', 'jenis': 'TextEdit', 'foto': 'ExternalResource', 'stas_awal': 'Hidden', 'stas_akhir': 'Hidden', });
lyr_SaluranAlosika_4.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'kon_sal_25': 'TextEdit', 'kon_jln_25': 'TextEdit', 'jenis': 'TextEdit', 'foto': 'ExternalResource', 'stas_awal': 'TextEdit', 'stas_akhir': 'TextEdit', });
lyr_BangunanAlosika_5.set('fieldImages', {'nama': 'Hidden', 'nomenklatu': 'TextEdit', 'id_di': 'Hidden', 'norec': 'Hidden', 'k_aset': 'Hidden', 'kon_25': 'TextEdit', 'jenis': 'TextEdit', 'foto': 'ExternalResource', });
lyr_LuasBaku_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_Attrib': 'hidden field', 'Id': 'hidden field', 'FID_pusat1': 'hidden field', 'Nm_Inf': 'hidden field', 'Luas_Ha': 'inline label - visible with data', 'Thn_Dat': 'hidden field', 'Nama_WS': 'hidden field', 'Nama_DAS': 'hidden field', 'Irigasi': 'hidden field', 'Jenis_DI': 'hidden field', 'Bgn_UTM': 'hidden field', 'Nm_Bgn_Utm': 'hidden field', 'Smb_Air': 'hidden field', 'Kewenangan': 'hidden field', 'L_Renc': 'hidden field', 'Luas_Pot': 'hidden field', 'Luas_Fung': 'hidden field', 'P_Sal_Ind': 'hidden field', 'Ko_Sal_Ind': 'hidden field', 'P_Sal_Sek': 'hidden field', 'Ko_Sal_Sek': 'hidden field', 'Pjn_Sal_Te': 'hidden field', 'Kon_Sal_Te': 'hidden field', 'P_Sal_Pem': 'hidden field', 'Ko_Sal_Pe': 'hidden field', 'P_Sal_Sup': 'hidden field', 'Ko_Sal_Sup': 'hidden field', 'Jml_Kl_Ps': 'hidden field', 'Kon_Kl_Ps': 'hidden field', 'Jml_Bg_Bag': 'hidden field', 'Kon_Bg_Bag': 'hidden field', 'Jml_Bg_B_S': 'hidden field', 'Kon_Bg_B_S': 'hidden field', 'Jml_Bg_Sad': 'hidden field', 'Kon_Bg_Sad': 'hidden field', 'Jml_Bg_Pen': 'hidden field', 'Kon_Bg_Pen': 'hidden field', 'Jml_Sip': 'hidden field', 'Kon_Sip': 'hidden field', 'Jml_Tlg': 'hidden field', 'Kon_Tlg': 'hidden field', 'Jml_Jmb': 'hidden field', 'Kon_Jmb': 'hidden field', 'Jml_plk': 'hidden field', 'Kon_plk': 'hidden field', 'Jml_P3A': 'hidden field', 'Jml_A_GP3A': 'hidden field', 'Jml_A_P3A': 'hidden field', 'Koord_X': 'hidden field', 'Koord_Y': 'hidden field', 'Shape_Leng': 'hidden field', 'Nm_Prov': 'hidden field', 'Nm_Kab': 'hidden field', 'Kewenang_1': 'hidden field', 'Nm_Inf_1': 'hidden field', 'Nm_Prov_1': 'hidden field', 'Keterangan': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LuasFungsional_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_Attrib': 'hidden field', 'Id': 'hidden field', 'FID_pusat1': 'hidden field', 'Nm_Inf': 'hidden field', 'Luas_Ha': 'inline label - visible with data', 'Thn_Dat': 'hidden field', 'Nama_WS': 'hidden field', 'Nama_DAS': 'hidden field', 'Irigasi': 'hidden field', 'Jenis_DI': 'hidden field', 'Bgn_UTM': 'hidden field', 'Nm_Bgn_Utm': 'hidden field', 'Smb_Air': 'hidden field', 'Kewenangan': 'hidden field', 'L_Renc': 'hidden field', 'Luas_Pot': 'hidden field', 'Luas_Fung': 'hidden field', 'P_Sal_Ind': 'hidden field', 'Ko_Sal_Ind': 'hidden field', 'P_Sal_Sek': 'hidden field', 'Ko_Sal_Sek': 'hidden field', 'Pjn_Sal_Te': 'hidden field', 'Kon_Sal_Te': 'hidden field', 'P_Sal_Pem': 'hidden field', 'Ko_Sal_Pe': 'hidden field', 'P_Sal_Sup': 'hidden field', 'Ko_Sal_Sup': 'hidden field', 'Jml_Kl_Ps': 'hidden field', 'Kon_Kl_Ps': 'hidden field', 'Jml_Bg_Bag': 'hidden field', 'Kon_Bg_Bag': 'hidden field', 'Jml_Bg_B_S': 'hidden field', 'Kon_Bg_B_S': 'hidden field', 'Jml_Bg_Sad': 'hidden field', 'Kon_Bg_Sad': 'hidden field', 'Jml_Bg_Pen': 'inline label - visible with data', 'Kon_Bg_Pen': 'hidden field', 'Jml_Sip': 'hidden field', 'Kon_Sip': 'hidden field', 'Jml_Tlg': 'hidden field', 'Kon_Tlg': 'hidden field', 'Jml_Jmb': 'hidden field', 'Kon_Jmb': 'hidden field', 'Jml_plk': 'hidden field', 'Kon_plk': 'hidden field', 'Jml_P3A': 'hidden field', 'Jml_A_GP3A': 'hidden field', 'Jml_A_P3A': 'hidden field', 'Koord_X': 'hidden field', 'Koord_Y': 'hidden field', 'Shape_Leng': 'hidden field', 'Nm_Prov': 'hidden field', 'Nm_Kab': 'hidden field', 'Kewenang_1': 'hidden field', 'Nm_Inf_1': 'hidden field', 'Nm_Prov_1': 'hidden field', 'Keterangan': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_JalanAlosika_3.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'kon_sal_25': 'inline label - visible with data', 'kon_jln_25': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'foto': 'no label', });
lyr_SaluranAlosika_4.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'kon_sal_25': 'inline label - visible with data', 'kon_jln_25': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'foto': 'no label', 'stas_awal': 'inline label - visible with data', 'stas_akhir': 'inline label - visible with data', });
lyr_BangunanAlosika_5.set('fieldLabels', {'nomenklatu': 'inline label - visible with data', 'kon_25': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_BangunanAlosika_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});