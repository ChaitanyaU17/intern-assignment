const GalleryGrid = () => {
  const images = [
    'https://cdn.dribbble.com/userupload/9604241/file/original-ee49afb4ac7afc3f9498e4dd6ac089d5.png?resize=1504x1128',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrArxQujDIl2EJ0ANYsF2j_FMaltMzRQoaHPw-SkHJ5BpE2kxe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfu7s-HzXFY1M9DiO6pss_QQHcz_iTEgCf8kUEctaqnnbFIGtG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt99qoPnEG9cw-Y1IQZL-TFESXfuVCB99EGNj2_mmfrnK4T1I3',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x7XcysVpIRSp0nj0HvGzj2QcDxDc0Gam_Bj7DVIiruquHsSm',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzzpZYU80z85xmLQVMR68-TNCB7jYCBIf-odDCbCVZ5yy5Xt5B',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRszVOsv3RRjMozSzU3asB4gQcOxfsMP_Zs894wRLyXbs3M1y-N',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-HgiY_R0Am5sG2LKexE0u6sDrjArwPqaLr72Ol41IkKLD5i6Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzptFvOXtPgQj5W6oqDS5riQ0ZGNqDPIOPSpsYdiLGl2JW_r0',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaKeJN4oBfK4iGt-dS31hI-EiB75xB2oA9AtMWbM5Rrg4GdGM',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x7XcysVpIRSp0nj0HvGzj2QcDxDc0Gam_Bj7DVIiruquHsSm',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt99qoPnEG9cw-Y1IQZL-TFESXfuVCB99EGNj2_mmfrnK4T1I3',
  ];

  return (
    <section className="grid grid-cols-2 bg-gray-900 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {images.map((src, index) => (
        <div key={index} className="relative">
           <img
            src={src}
            alt={`Gallery ${index}`}
            className={`w-full object-cover rounded-lg ${
              (index % 2 === 0 ) 
                ? 'h-full' 
                : 'h-80' 
            }`}
          />
        </div>
      ))}
    </section>
  );
};

export default GalleryGrid;
