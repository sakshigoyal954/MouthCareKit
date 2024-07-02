import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Discription = () => {
  return (
    <div>
          <div data-aos="fade-left">
        <Box py={3} >
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            क्या 1 उंगली से ज्यादा मुंह खोलना संभव है?
          </Typography>
          <Divider style={{ backgroundColor: "#DD952B" }} />
        </Box>
        <Typography fontSize={18} textAlign="justify" sx={{ lineHeight: 2 }}>
          हां, मेरे पास ज्यादातर मरीज 1 ऊँगली से कम मुँह खुल रहा हो ऐसे मरीज़ आते
          है । लोग OSMF जैसी बीमारियों से ग्रसित होकर आते हैं यह बीमारी लोगों को
          अंदर से तोड़ देती है। लोग खाना भी ठीक तरह से नहीं खा पाते है ।
        </Typography>
        <Typography
          fontSize={18}
          textAlign="justify"
          pt={2}
          sx={{ lineHeight: 2 }}
        >
          लोग हर समय मुंह न खुलने की शिकायत करते हैं। क्योंकि लोगों को खाना और
          बात करना मुश्किल होता है। मेरे कई मरीज रोते हैं। "मेरे साथ ऐसा क्यों
          होता है?" और मैं उनसे कहता हु की त्वचा को पतली करने पर ध्यान दो और
          मुंह का व्यायाम करो जिससे आपका मुंह खुलेगा।
        </Typography>
      </div>

      <div data-aos="fade-right">
        <Box py={3} sx={{textAlign:"end"}}>
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            क्या 3 से 4 अंगुलियों से मुंह खोलना संभव है?
          </Typography>
          <Divider style={{ backgroundColor: "#DD952B" }} />
        </Box>
        <Typography fontSize={18} textAlign="justify" sx={{ lineHeight: 2 }}>
          हां, अभी कुछ दिन पहले मेरे एक मरीज को 3 ऊँगली तक का मुंह खोलके दिखाया
          था। लेकिन इसके लिए एक अलग इलाज शुरू किया गया। इसमें 3 तरह की दवा है।
          यह तरीका अच्छा और बहुत प्रभावीशाली है। दवा के इस्तेमाल के बाद आपको
          एक्सरसाइज करनी है कुछ ही दिनों में आपका मुंह पहले से ज्यादा खुलने
          लगेगा। दुर्भाग्य से मेरे कई मरीजों को यह एक्सरसाइज मुश्किल लगता था।
        </Typography>
        <Typography
          fontSize={18}
          textAlign="justify"
          pt={2}
          sx={{ lineHeight: 2 }}
        >
          सभी लोगों के पास इस एक्सरसाइज को करने का समय नहीं होता है। लेकिन मुझे
          पूरा भरोसा था कि त्वचा को पतला करने का कोई आसान तरीका होगा और आधुनिक
          तरीके की जरूरत होगी और मैं इस तरीके को खोजने में सफल रहा।
        </Typography>
      </div>
    </div>
  )
}

export default Discription