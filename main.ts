<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const categores__main__page = require('./container__file__json/Categores Main Page.json')
const daily = require('./container__file__json/daily Manpage.json');
const banner__side__event = require('./container__file__json/banner side event .json');
const products = require('./container__file__json/api products.json');
const search = require('./container__file__json/Search.json');
const top__search = require('./container__file__json/Top Search.json');
const small__items__main__page = require("./container__file__json/Shopee Small Items.json")
const flash__sell__main__page = require("./container__file__json/Flash Sale.json")
const top__products__main__page = require("./container__file__json/Top Product.json")
const site__events__main__page = require("./container__file__json/Site Event MainPage.json")
const filter__cart = require('./container__file__json/filter__cart.json')
const banner__small = require('./container__file__json/banner Shopee Small.json')
const info_store_relate = require('./container__file__json/info_store_relate.json')
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('combined'));

app.get('/api__daily/', (req, res) => {
  res.json(daily);
});

app.get('/api__top__search/', (req, res) => {
  res.json(top__search);
});

app.get('/api__search/', (req, res) => {
  res.json(search);
});

app.get('/api__products/', (req, res) => {
  res.json(products);
});

app.get('/api__banner__side__event/', (req, res) => {
  res.json(banner__side__event);
});
app.get('/api__small__main__page/', (req, res) => {
  res.json(small__items__main__page);
});
app.get('/api__categores__main__page/', function (req, res) {
  res.json(categores__main__page);
})
app.get('/flash__sell__main__page/', function (req, res) {
  res.json(flash__sell__main__page);
})

app.get('/top__products__main__page/', function (req, res) {
  res.json(top__products__main__page);
})

app.get('/site__events__main__page/', function (req, res) {
  res.json(site__events__main__page);
})

app.get('/filter__cart/', function (req, res) {
  res.json(filter__cart);
})

app.get('/banner__small/', function (req, res) {
  res.json(banner__small);
})

app.get('/info_store_relate/', function (req, res) {
  res.json(info_store_relate);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
=======
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const categores__main__page = require('./container__file__json/Categores Main Page.json')
const daily = require('./container__file__json/daily Manpage.json');
const banner__side__event = require('./container__file__json/banner side event .json');
const search = require('./container__file__json/Search.json');
const top__search = require('./container__file__json/Top Search.json');
const small__items__main__page = require("./container__file__json/Shopee Small Items.json")
const flash__sell__main__page = require("./container__file__json/Flash Sale.json")
const top__products__main__page = require("./container__file__json/Top Product.json")
const site__events__main__page = require("./container__file__json/Site Event MainPage.json")
const filter__cart = require('./container__file__json/filter__cart.json')
const banner__small = require('./container__file__json/banner Shopee Small.json')
const info_store_relate = require('./container__file__json/info_store_relate.json')
///
const combo_2_tui_sua_tang_can_muscle_mass_gainer = require('./Container__Products/combo_2_tui_sua_tang_can_muscle_mass_gainer.json');
const may_hut_bui_mini_godwell_khong_day_luc_hut_6000mpa_lam_sach_ban_phim_o_to_nho_gon_pin_sac_tien_loi = require("./Container__Products/may_hut_bui_mini_godwell_khong_day_luc_hut_6000mpa_lam_sach_ban_phim_o_to_nho_gon_pin_sac_tien_loi.json")
const laptop_asus_rog_strix_scar_18_2024_g834_i9_14900hx_rtx_4090_ram_64gb_ssd_2tb_18_2_5k_miniled_240hz = require("./Container__Products/laptop_asus_rog_strix_scar_18_2024_g834_i9_14900hx_rtx_4090_ram_64gb_ssd_2tb_18_2_5k_miniled_240hz.json")
const sua_tang_co_giam_mo_co_binh_shaker_whey_protein_isolate_bodygold_tui_1kg = require("./Container__Products/sua_tang_co_giam_mo_co_binh_shaker_whey_protein_isolate_bodygold_tui_1kg.json")
const lon_nuoc_uong_tang_luc_redbull_energy_drink_red_bull_nhap_uc_250ml = require("./Container__Products/24_lon_nuoc_uong_tang_luc_redbull_energy_drink_red_bull_nhap_uc_250ml.json")
const dau_goi_huong_nuoc_hoa_cho_nam_romanno_650ml = require("./Container__Products/dau_goi_huong_nuoc_hoa_cho_nam_romanno_650ml.json")
const combo_5_hop_but_chi_mau_36_mau_da_dang_non_toxic_phu_hop_cho_be_thoa_thich_sang_tao = require("./Container__Products/combo_5_hop_but_chi_mau_36_mau_da_dang_non_toxic_phu_hop_cho_be_thoa_thich_sang_tao.json")
const dau_goi_dau_huong_nuoc_hoa_thom_mat_cho_nu_romanno_650ml = require("./Container__Products/dau_goi_dau_huong_nuoc_hoa_thom_mat_cho_nu_romanno_650ml.json")
const but_bi_thien_long_g1_ky_uc_05mm_do_hop_12_cay = require("./Container__Products/but_bi_thien_long_g1_ky_uc_0.5mm_do_hop_12_cay.json")
const giay_nam_sneaker_trang_xanh_den_classy_coolstyle_chat_lieu_cao_cap = require("./Container__Products/giay_nam_sneaker_trang_xanh_den_classy_coolstyle_chat_lieu_cao_cap.json")

const tang_can_haemovit_vitamin_giup_tang_can_cho_nguoi_gay_tre_em_an_ngu_ngon_tang_can_tu_3_5kg_cam_ket_an_toan = require("./Container__Products/tang_can_haemovit_vitamin_giup_tang_can_cho_nguoi_gay_tre_em_an_ngu_ngon_tang_can_tu_3_5kg_cam_ket_an_toan.json")
const hang_chinh_hang_thung_bo_cung_redbull_thai_lan_24_lon_250ml = require("./Container__Products/hang_chinh_hang_thung_bo_cung_redbull_thai_lan_24_lon_250ml.json")
const sua_tang_co_giam_mo_whey_protein_isolate_500gram_tang_binh_lac_khi_mua_2_tui = require("./Container__Products/sua_tang_co_giam_mo_whey_protein_isolate_500gram_tang_binh_lac_khi_mua_2_tui.json")
const pin_bo_phat_wifi_tu_sim_3g_4g_lte_m80_router_pin_du_phong_2400mah = require("./Container__Products/pin_bo_phat_wifi_tu_sim_3g_4g_lte_m80_router_pin_du_phong_2400mah.json")
const rongeo_robot_hut_lau_nha_robot_quet_nha_sac_usb_thong_minh_bon_trong_mot_quet_hut_lau_va_khu_trung_hut_bui = require("./Container__Products/rongeo_robot_hut_lau_nha_robot_quet_nha_sac_usb_thong_minh_bon_trong_mot_quet_hut_lau_va_khu_trung_hut_bui.json")
const whey_isolate_muscleking_2kg_tang_binh_lac_sua_tang_co_hap_thu_nhanh = require("./Container__Products/whey_isolate_muscleking_2kg_tang_binh_lac_sua_tang_co_hap_thu_nhanh.json")
const tui_10_vien_khu_mui_tay_bon_cau_the_he_moi_2x_tha_xa_toilet_diet_khuan_tay_sach_ve_sinh_vet_bam_ban_88292 = require("./Container__Products/tui_10_vien_khu_mui_tay_bon_cau_the_he_moi_2x_tha_xa_toilet_diet_khuan_tay_sach_ve_sinh_vet_bam_ban_88292.json")
const tui_xach_nu_thiet_ke_dang_vuong_tui_nu_dep_di_tiec_sang_trong_va_thanh_lich_tdc128_ok = require("./Container__Products/tui_xach_nu_thiet_ke_dang_vuong_tui_nu_dep_di_tiec_sang_trong_va_thanh_lich_tdc128_ok.json")
const chinh_hang_ostrovit_creatine_monohydrate_300g_500g_tang_co_tang_suc_manh_hieu_suat_tap_luyen = require("./Container__Products/chinh_hang_ostrovit_creatine_monohydrate_300g_500g_tang_co_tang_suc_manh_hieu_suat_tap_luyen.json")
const mo_hinh_mica_mo_hinh_dung_mica_standee_luffy_roronoa_zoro_ace_anime = require("./Container__Products/mo_hinh_mica_mo_hinh_dung_mica_standee_luffy_roronoa_zoro_ace_anime.json")

const kg_bim_bim_khoai_tay = require("./Container__Products/1kg_bim_bim_khoai_tay.json")
const hang_san_giao_nhanh_2h_xuc_xich_cao_cap_danh_cho_cho_meo_lna = require("./Container__Products/hang_san_giao_nhanh_2h_xuc_xich_cao_cap_danh_cho_cho_meo_lna.json")
const usb_phat_wifi_khong_day_4g_lte_150mbps_ho_tro_the_sim_4g_tien_dung_cho_gia_dinh_van_phong = require("./Container__Products/usb_phat_wifi_khong_day_4g_lte_150mbps_ho_tro_the_sim_4g_tien_dung_cho_gia_dinh_van_phong.json")
const ao_chong_nang_nam_thong_hoi_tui_khoa = require("./Container__Products/ao_chong_nang_nam_thong_hoi_tui_khoa.json")
const goi_mien_phi_van_chuyen_xtra = require("./Container__Products/goi_mien_phi_van_chuyen_xtra.json")
const banh_nabati_pho_mai_17g_x_10_goi = require("./Container__Products/banh_nabati_pho_mai_17g_x_10_goi.json")
const giay_the_thao_thoang_khi_thoai_mai_phong_cach_moi_cho_nam = require("./Container__Products/giay_the_thao_thoang_khi_thoai_mai_phong_cach_moi_cho_nam.json")
const op_dien_thoai_chong_soc_nua_than_nguoi_nhen_hoat_hinh_hop_thoi_trang_tuong_thich_cho_iphone_11_12_13_14_15pro_max_7_8_plus_x_xr_xs_max_se_2020_op_lung_silicon_sieu_bao_ve_op_lung_mem = require("./Container__Products/op_dien_thoai_chong_soc_nua_than_nguoi_nhen_hoat_hinh_hop_thoi_trang_tuong_thich_cho_iphone_11_12_13_14_15pro_max_7_8_plus_x_xr_xs_max_se_2020_op_lung_silicon_sieu_bao_ve_op_lung_mem.json")
const khay_da_bi_tron_tu_lanh_33_vien_co_nap_day_ngau_nhien = require("./Container__Products/khay_da_bi_tron_tu_lanh_33_vien_co_nap_day_ngau_nhien.json")
const tai_nghe_bluetooth_xiaomi_pro_4_giam_tieng_on_khong_day_5_0_cho_android_co_micro_chong_nuoc_am_thanh_noi_hifi = require("./Container__Products/tai_nghe_bluetooth_xiaomi_pro_4_giam_tieng_on_khong_day_5.0_cho_android_co_micro_chong_nuoc_am_thanh_noi_hifi.json")



const sua_tang_can_muscle_mass_gainer_750gram_khi_mua_2_tui_tang_1_binh_lac = require("./Container__Products/sua_tang_can_muscle_mass_gainer_750gram_khi_mua_2_tui_tang_1_binh_lac.json")
const lich_tap_tang_co_giam_mo_lich_tap_viet_rieng_cho_ca_nhan_lang_hoa_workout = require("./Container__Products/lich_tap_tang_co_giam_mo_lich_tap_viet_rieng_cho_ca_nhan_lang_hoa_workout.json")
const combo_3_tui_bot_ngu_coc_hat_protein_tang_can_tang_co_tang_binh_pha_lac = require("./Container__Products/combo_3_tui_bot_ngu_coc_hat_protein_tang_can_tang_co_tang_binh_pha_lac.json")
const romane_sac_pin_du_phong_20000mah_sac_du_phong_dung_luong_lon_nang_luong_mat_troi_ngan_hang_sieu_mong_chong_nuoc_ngoai_troi_khan_cap_nguon_dien_cam_tay_cuc_sac_du_phong = require("./Container__Products/romane_sac_pin_du_phong_20000mah_sac_du_phong_dung_luong_lon_nang_luong_mat_troi_ngan_hang_sieu_mong_chong_nuoc_ngoai_troi_khan_cap_nguon_dien_cam_tay_cuc_sac_du_phong.json")
const qua_tang_khong_ban_loc_6_lon_nuoc_giai_khat_khong_duong_coca_cola_zero_320ml_lon_phien_ban_gioi_han_k_wave = require("./Container__Products/qua_tang_khong_ban_loc_6_lon_nuoc_giai_khat_khong_duong_coca_cola_zero_320ml_lon_phien_ban_gioi_han_k_wave.json")
const day_nhay_the_luc_day_nhay_the_luc_dan_hoi_2_9m_loi_thep_ho_tro_luyen_tap_the_duc_the_thao_tien_loi_tai_nha = require("./Container__Products/day_nhay_the_luc_day_nhay_the_luc_dan_hoi_2.9m_loi_thep_ho_tro_luyen_tap_the_duc_the_thao_tien_loi_tai_nha.json")
const hang_chinh_hang_100_dien_thoai_samsung_grand_prime_may_cu = require("./Container__Products/hang_chinh_hang_100_dien_thoai_samsung_grand_prime_may_cu.json")
const dong_ho_nam_nu_unisex_led_rose_kieu_dang_phi_hanh_gia_day_cao_su_em_tay_thoi_trang_ca_tinh_dh29 = require('./Container__Products/dong_ho_nam_nu_unisex_led_rose_kieu_dang_phi_hanh_gia_day_cao_su_em_tay_thoi_trang_ca_tinh_dh29')
const bich_50_100_vien_keo_cafe_khong_duong_it_duong_an_kieng_cafe_sua = require("./Container__Products/bich_50_100_vien_keo_cafe_khong_duong_it_duong_an_kieng_cafe_sua")



///
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('combined'));


//

app.get('/combo_2_tui_sua_tang_can_muscle_mass_gainer/', (req, res) => {
  res.json(combo_2_tui_sua_tang_can_muscle_mass_gainer);
});

app.get('/laptop_asus_rog_strix_scar_18_2024_g834_i9_14900hx_rtx_4090_ram_64gb_ssd_2tb_18_2_5k_miniled_240hz/', (req, res) => {
  res.json(laptop_asus_rog_strix_scar_18_2024_g834_i9_14900hx_rtx_4090_ram_64gb_ssd_2tb_18_2_5k_miniled_240hz)
})

app.get('/may_hut_bui_mini_godwell_khong_day_luc_hut_6000mpa_lam_sach_ban_phim_o_to_nho_gon_pin_sac_tien_loi/', (req, res) => {
  res.json(may_hut_bui_mini_godwell_khong_day_luc_hut_6000mpa_lam_sach_ban_phim_o_to_nho_gon_pin_sac_tien_loi)
})

app.get('/sua_tang_co_giam_mo_co_binh_shaker_whey_protein_isolate_bodygold_tui_1kg/', (req, res) => {
  res.json(sua_tang_co_giam_mo_co_binh_shaker_whey_protein_isolate_bodygold_tui_1kg)
})

app.get('/lon_nuoc_uong_tang_luc_redbull_energy_drink_red_bull_nhap_uc_250ml/', (req, res) => {
  res.json(lon_nuoc_uong_tang_luc_redbull_energy_drink_red_bull_nhap_uc_250ml)
})

app.get('/dau_goi_huong_nuoc_hoa_cho_nam_romanno_650ml/', (req, res) => {
  res.json(dau_goi_huong_nuoc_hoa_cho_nam_romanno_650ml)
})

app.get('/combo_5_hop_but_chi_mau_36_mau_da_dang_non_toxic_phu_hop_cho_be_thoa_thich_sang_tao/', (req, res) => {
  res.json(combo_5_hop_but_chi_mau_36_mau_da_dang_non_toxic_phu_hop_cho_be_thoa_thich_sang_tao)
})

app.get('/dau_goi_dau_huong_nuoc_hoa_thom_mat_cho_nu_romanno_650ml/', (req, res) => {
  res.json(dau_goi_dau_huong_nuoc_hoa_thom_mat_cho_nu_romanno_650ml)
})

app.get('/but_bi_thien_long_g1_ky_uc_05mm_do_hop_12_cay/', (req, res) => {
  res.json(but_bi_thien_long_g1_ky_uc_05mm_do_hop_12_cay)
})

app.get('/giay_nam_sneaker_trang_xanh_den_classy_coolstyle_chat_lieu_cao_cap/', (req, res) => {
  res.json(giay_nam_sneaker_trang_xanh_den_classy_coolstyle_chat_lieu_cao_cap)
})
//
app.get('/tang_can_haemovit_vitamin_giup_tang_can_cho_nguoi_gay_tre_em_an_ngu_ngon_tang_can_tu_3_5kg_cam_ket_an_toan', (req, res) => {
  res.json(tang_can_haemovit_vitamin_giup_tang_can_cho_nguoi_gay_tre_em_an_ngu_ngon_tang_can_tu_3_5kg_cam_ket_an_toan);
});

app.get('/hang_chinh_hang_thung_bo_cung_redbull_thai_lan_24_lon_250ml', (req, res) => {
  res.json(hang_chinh_hang_thung_bo_cung_redbull_thai_lan_24_lon_250ml);
});

app.get('/sua_tang_co_giam_mo_whey_protein_isolate_500gram_tang_binh_lac_khi_mua_2_tui', (req, res) => {
  res.json(sua_tang_co_giam_mo_whey_protein_isolate_500gram_tang_binh_lac_khi_mua_2_tui);
});

app.get('/pin_bo_phat_wifi_tu_sim_3g_4g_lte_m80_router_pin_du_phong_2400mah', (req, res) => {
  res.json(pin_bo_phat_wifi_tu_sim_3g_4g_lte_m80_router_pin_du_phong_2400mah);
});

app.get('/rongeo_robot_hut_lau_nha_robot_quet_nha_sac_usb_thong_minh_bon_trong_mot_quet_hut_lau_va_khu_trung_hut_bui', (req, res) => {
  res.json(rongeo_robot_hut_lau_nha_robot_quet_nha_sac_usb_thong_minh_bon_trong_mot_quet_hut_lau_va_khu_trung_hut_bui);
});

app.get('/whey_isolate_muscleking_2kg_tang_binh_lac_sua_tang_co_hap_thu_nhanh', (req, res) => {
  res.json(whey_isolate_muscleking_2kg_tang_binh_lac_sua_tang_co_hap_thu_nhanh);
});

app.get('/tui_10_vien_khu_mui_tay_bon_cau_the_he_moi_2x_tha_xa_toilet_diet_khuan_tay_sach_ve_sinh_vet_bam_ban_88292', (req, res) => {
  res.json(tui_10_vien_khu_mui_tay_bon_cau_the_he_moi_2x_tha_xa_toilet_diet_khuan_tay_sach_ve_sinh_vet_bam_ban_88292);
});

app.get('/tui_xach_nu_thiet_ke_dang_vuong_tui_nu_dep_di_tiec_sang_trong_va_thanh_lich_tdc128_ok', (req, res) => {
  res.json(tui_xach_nu_thiet_ke_dang_vuong_tui_nu_dep_di_tiec_sang_trong_va_thanh_lich_tdc128_ok);
});

app.get('/chinh_hang_ostrovit_creatine_monohydrate_300g_500g_tang_co_tang_suc_manh_hieu_suat_tap_luyen', (req, res) => {
  res.json(chinh_hang_ostrovit_creatine_monohydrate_300g_500g_tang_co_tang_suc_manh_hieu_suat_tap_luyen);
});

app.get('/mo_hinh_mica_mo_hinh_dung_mica_standee_luffy_roronoa_zoro_ace_anime', (req, res) => {
  res.json(mo_hinh_mica_mo_hinh_dung_mica_standee_luffy_roronoa_zoro_ace_anime);
});


app.get('/1kg_bim_bim_khoai_tay', (req, res) => {
  res.json(kg_bim_bim_khoai_tay);
});

app.get('/hang_san_giao_nhanh_2h_xuc_xich_cao_cap_danh_cho_cho_meo_lna', (req, res) => {
  res.json(hang_san_giao_nhanh_2h_xuc_xich_cao_cap_danh_cho_cho_meo_lna);
});

app.get('/usb_phat_wifi_khong_day_4g_lte_150mbps_ho_tro_the_sim_4g_tien_dung_cho_gia_dinh_van_phong', (req, res) => {
  res.json(usb_phat_wifi_khong_day_4g_lte_150mbps_ho_tro_the_sim_4g_tien_dung_cho_gia_dinh_van_phong);
});

app.get('/ao_chong_nang_nam_thong_hoi_tui_khoa', (req, res) => {
  res.json(ao_chong_nang_nam_thong_hoi_tui_khoa);
});

app.get('/goi_mien_phi_van_chuyen_xtra', (req, res) => {
  res.json(goi_mien_phi_van_chuyen_xtra);
});

app.get('/banh_nabati_pho_mai_17g_x_10_goi', (req, res) => {
  res.json(banh_nabati_pho_mai_17g_x_10_goi);
});

app.get('/giay_the_thao_thoang_khi_thoai_mai_phong_cach_moi_cho_nam', (req, res) => {
  res.json(giay_the_thao_thoang_khi_thoai_mai_phong_cach_moi_cho_nam);
});

app.get('/op_dien_thoai_chong_soc_nua_than_nguoi_nhen_hoat_hinh_hop_thoi_trang_tuong_thich_cho_iphone_11_12_13_14_15pro_max_7_8_plus_x_xr_xs_max_se_2020_op_lung_silicon_sieu_bao_ve_op_lung_mem', (req, res) => {
  res.json(op_dien_thoai_chong_soc_nua_than_nguoi_nhen_hoat_hinh_hop_thoi_trang_tuong_thich_cho_iphone_11_12_13_14_15pro_max_7_8_plus_x_xr_xs_max_se_2020_op_lung_silicon_sieu_bao_ve_op_lung_mem);
});

app.get('/khay_da_bi_tron_tu_lanh_33_vien_co_nap_day_ngau_nhien', (req, res) => {
  res.json(khay_da_bi_tron_tu_lanh_33_vien_co_nap_day_ngau_nhien);
});

app.get('/tai_nghe_bluetooth_xiaomi_pro_4_giam_tieng_on_khong_day_5.0_cho_android_co_micro_chong_nuoc_am_thanh_noi_hifi', (req, res) => {
  res.json(tai_nghe_bluetooth_xiaomi_pro_4_giam_tieng_on_khong_day_5_0_cho_android_co_micro_chong_nuoc_am_thanh_noi_hifi);
});



app.get('/sua_tang_can_muscle_mass_gainer_750gram_khi_mua_2_tui_tang_1_binh_lac', (req, res) => {
  res.json(sua_tang_can_muscle_mass_gainer_750gram_khi_mua_2_tui_tang_1_binh_lac);
});

app.get('/lich_tap_tang_co_giam_mo_lich_tap_viet_rieng_cho_ca_nhan_lang_hoa_workout', (req, res) => {
  res.json(lich_tap_tang_co_giam_mo_lich_tap_viet_rieng_cho_ca_nhan_lang_hoa_workout);
});

app.get('/combo_3_tui_bot_ngu_coc_hat_protein_tang_can_tang_co_tang_binh_pha_lac', (req, res) => {
  res.json(combo_3_tui_bot_ngu_coc_hat_protein_tang_can_tang_co_tang_binh_pha_lac);
});

app.get('/romane_sac_pin_du_phong_20000mah_sac_du_phong_dung_luong_lon_nang_luong_mat_troi_ngan_hang_sieu_mong_chong_nuoc_ngoai_troi_khan_cap_nguon_dien_cam_tay_cuc_sac_du_phong', (req, res) => {
  res.json(romane_sac_pin_du_phong_20000mah_sac_du_phong_dung_luong_lon_nang_luong_mat_troi_ngan_hang_sieu_mong_chong_nuoc_ngoai_troi_khan_cap_nguon_dien_cam_tay_cuc_sac_du_phong);
});

app.get('/qua_tang_khong_ban_loc_6_lon_nuoc_giai_khat_khong_duong_coca_cola_zero_320ml_lon_phien_ban_gioi_han_k_wave', (req, res) => {
  res.json(qua_tang_khong_ban_loc_6_lon_nuoc_giai_khat_khong_duong_coca_cola_zero_320ml_lon_phien_ban_gioi_han_k_wave);
});

app.get('/day_nhay_the_luc_day_nhay_the_luc_dan_hoi_2.9m_loi_thep_ho_tro_luyen_tap_the_duc_the_thao_tien_loi_tai_nha', (req, res) => {
  res.json(day_nhay_the_luc_day_nhay_the_luc_dan_hoi_2_9m_loi_thep_ho_tro_luyen_tap_the_duc_the_thao_tien_loi_tai_nha);
});

app.get('/hang_chinh_hang_100_dien_thoai_samsung_grand_prime_may_cu', (req, res) => {
  res.json(hang_chinh_hang_100_dien_thoai_samsung_grand_prime_may_cu);
});

app.get('/dong_ho_nam_nu_unisex_led_rose_kieu_dang_phi_hanh_gia_day_cao_su_em_tay_thoi_trang_ca_tinh_dh29', (req, res) => {
  res.json(dong_ho_nam_nu_unisex_led_rose_kieu_dang_phi_hanh_gia_day_cao_su_em_tay_thoi_trang_ca_tinh_dh29);
});

app.get('/bich_50_100_vien_keo_cafe_khong_duong_it_duong_an_kieng_cafe_sua', (req, res) => {
  res.json(bich_50_100_vien_keo_cafe_khong_duong_it_duong_an_kieng_cafe_sua);
});



//



















app.get('/api__daily/', (req, res) => {
  res.json(daily);
});

app.get('/api__top__search/', (req, res) => {
  res.json(top__search);
});

app.get('/api__search/', (req, res) => {
  res.json(search);
});

app.get('/api__banner__side__event/', (req, res) => {
  res.json(banner__side__event);
});
app.get('/api__small__main__page/', (req, res) => {
  res.json(small__items__main__page);
});
app.get('/api__categores__main__page/', function (req, res) {
  res.json(categores__main__page);
})
app.get('/flash__sell__main__page/', function (req, res) {
  res.json(flash__sell__main__page);
})

app.get('/top__products__main__page/', function (req, res) {
  res.json(top__products__main__page);
})

app.get('/site__events__main__page/', function (req, res) {
  res.json(site__events__main__page);
})

app.get('/filter__cart/', function (req, res) {
  res.json(filter__cart);
})

app.get('/banner__small/', function (req, res) {
  res.json(banner__small);
})

app.get('/info_store_relate/', function (req, res) {
  res.json(info_store_relate);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
>>>>>>> f0f9df7 (update)
