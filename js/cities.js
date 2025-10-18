/**
 * Returns city info (latitude, longitude, timezone) for known cityName.
 * If not found, returns null.
 */
function getCityInfo(cityName) {
  const cityData = {
	'Arakkonam': {
      latitude: { degrees: 13, minutes: 08, direction: 'N' },
      longitude: { degrees: 79, minutes: 67, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Chennai': {
      latitude: { degrees: 13, minutes: 5, direction: 'N' },
      longitude: { degrees: 80, minutes: 17, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Vellore': {
      latitude: { degrees: 12, minutes: 56, direction: 'N' },
      longitude: { degrees: 79, minutes: 8, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Salem': {
      latitude: { degrees: 11, minutes: 40, direction: 'N' },
      longitude: { degrees: 78, minutes: 9, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Coimbatore': {
      latitude: { degrees: 11, minutes: 0, direction: 'N' },
      longitude: { degrees: 76, minutes: 57, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Krishnagiri': {
      latitude: { degrees: 12, minutes: 31, direction: 'N' },
      longitude: { degrees: 78, minutes: 12, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tirunelveli': {
      latitude: { degrees: 8, minutes: 44, direction: 'N' },
      longitude: { degrees: 77, minutes: 41, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Kanyakumari': {
      latitude: { degrees: 8, minutes: 5, direction: 'N' },
      longitude: { degrees: 77, minutes: 32, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tiruchirappalli': {
      latitude: { degrees: 10, minutes: 49, direction: 'N' },
      longitude: { degrees: 78, minutes: 40, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Madurai': {
      latitude: { degrees: 9, minutes: 55, direction: 'N' },
      longitude: { degrees: 78, minutes: 7, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Ramanathapuram': {
      latitude: { degrees: 9, minutes: 23, direction: 'N' },
      longitude: { degrees: 78, minutes: 50, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Hyderabad': {
      latitude: { degrees: 17, minutes: 23, direction: 'N' },
      longitude: { degrees: 78, minutes: 27, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Bengaluru': {
      latitude: { degrees: 12, minutes: 58, direction: 'N' },
      longitude: { degrees: 77, minutes: 36, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Thiruvananthapuram': {
      latitude: { degrees: 8, minutes: 29, direction: 'N' },
      longitude: { degrees: 76, minutes: 57, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'New Delhi': {
      latitude: { degrees: 28, minutes: 38, direction: 'N' },
      longitude: { degrees: 77, minutes: 13, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Colombo': {
    latitude:  { degrees: 6,  minutes: 56, direction: 'N' },
    longitude: { degrees: 79, minutes: 51, direction: 'E' },
    timezone:  { hours: 5,  minutes: 30, direction: 'E' },
    timezoneName: 'Asia/Colombo',
    dst: false
    },
    'New York, NY': {
      latitude: { degrees: 40, minutes: 43, direction: 'N' },
      longitude: { degrees: 74, minutes: 0, direction: 'W' },
      timezone: { hours: 5, minutes: 0, direction: 'W' },
      timezoneName: 'America/New_York',
      dst: true
    },
    'Westlake, OH': {
      latitude: { degrees: 41, minutes: 27, direction: 'N' },
      longitude: { degrees: 81, minutes: 55, direction: 'W' },
      timezone: { hours: 5, minutes: 0, direction: 'W' },
      timezoneName: 'America/New_York',
      dst: true
    },
    'San Francisco, CA': {
      latitude: { degrees: 37, minutes: 46, direction: 'N' },
      longitude: { degrees: 122, minutes: 25, direction: 'W' },
      timezone: { hours: 8, minutes: 0, direction: 'W' },
      timezoneName: 'America/Los_Angeles',
      dst: true
    },
    'Mumbai': {
      latitude: { degrees: 19, minutes: 4, direction: 'N' },
      longitude: { degrees: 72, minutes: 52, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'London': {
      latitude: { degrees: 51, minutes: 30, direction: 'N' },
      longitude: { degrees: 0, minutes: 7, direction: 'W' },
      timezone: { hours: 0, minutes: 0, direction: 'W' },
      timezoneName: 'Europe/London',
      dst: true
    },
    'Chicago, IL': {
      latitude: { degrees: 41, minutes: 52, direction: 'N' },
      longitude: { degrees: 87, minutes: 38, direction: 'W' },
      timezone: { hours: 6, minutes: 0, direction: 'W' },
      timezoneName: 'America/Chicago',
      dst: true
    },
    'Houston, TX': {
      latitude: { degrees: 29, minutes: 45, direction: 'N' },
      longitude: { degrees: 95, minutes: 22, direction: 'W' },
      timezone: { hours: 6, minutes: 0, direction: 'W' },
      timezoneName: 'America/Chicago',
      dst: true
    },
    'Phoenix, AZ': {
      latitude: { degrees: 33, minutes: 27, direction: 'N' },
      longitude: { degrees: 112, minutes: 4, direction: 'W' },
      timezone: { hours: 7, minutes: 0, direction: 'W' },
      timezoneName: 'America/Phoenix',
      dst: false
    },
    'Kolkata': {
      latitude: { degrees: 22, minutes: 34, direction: 'N' },
      longitude: { degrees: 88, minutes: 22, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },    
	'Sattur': {
      latitude: { degrees: 9, minutes: 35, direction: 'N' },
      longitude: { degrees: 77, minutes: 91, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Pondichery': {
      latitude: { degrees: 11, minutes: 94, direction: 'N' },
      longitude: { degrees: 79, minutes: 80, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },

	'Mettur': {
      latitude: { degrees: 11, minutes: 78, direction: 'N' },
      longitude: { degrees: 77, minutes: 79, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Tuticorin': {
      latitude: { degrees: 8, minutes: 78, direction: 'N' },
      longitude: { degrees: 78, minutes: 13, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },	
	'Theni': {
      latitude: { degrees: 10, minutes: 00, direction: 'N' },
      longitude: { degrees: 77, minutes: 47, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },	
	'Udumalaipettai': {
      latitude: { degrees: 10, minutes: 58, direction: 'N' },
      longitude: { degrees: 77, minutes: 25, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },	
	'Thanjavur': {
      latitude: { degrees: 10, minutes: 78, direction: 'N' },
      longitude: { degrees: 79, minutes: 18, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Musiri': {
      latitude: { degrees: 10, minutes: 95, direction: 'N' },
      longitude: { degrees: 78, minutes: 44, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Madurantakam': {
      latitude: { degrees: 12, minutes: 50, direction: 'N' },
      longitude: { degrees: 79, minutes: 88, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Cheyyaru': {
      latitude: { degrees: 12, minutes: 66, direction: 'N' },
      longitude: { degrees: 79, minutes: 54, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Paramakudi': {
      latitude: { degrees: 09, minutes: 55, direction: 'N' },
      longitude: { degrees: 78, minutes: 58, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },		
	'Erode': {
      latitude: { degrees: 11, minutes: 34, direction: 'N' },
      longitude: { degrees: 77, minutes: 71, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Tiruvannamalai': {
      latitude: { degrees: 12, minutes: 22, direction: 'N' },
      longitude: { degrees: 79, minutes: 07, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Gobichettipalayam': {
      latitude: { degrees: 11, minutes: 45, direction: 'N' },
      longitude: { degrees: 77, minutes: 43, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Rajapalayam': {
      latitude: { degrees: 09, minutes: 45, direction: 'N' },
      longitude: { degrees: 77, minutes: 55, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Virudhunagar': {
      latitude: { degrees: 09, minutes: 58, direction: 'N' },
      longitude: { degrees: 77, minutes: 96, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },		
	'Nagapattinam': {
      latitude: { degrees: 10, minutes: 76, direction: 'N' },
      longitude: { degrees: 79, minutes: 84, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Pudukkottai': {
      latitude: { degrees: 10, minutes: 38, direction: 'N' },
      longitude: { degrees: 78, minutes: 80, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Thiruvallur': {
      latitude: { degrees: 13, minutes: 12, direction: 'N' },
      longitude: { degrees: 79, minutes: 91, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },		
	'Palani': {
      latitude: { degrees: 10, minutes: 45, direction: 'N' },
      longitude: { degrees: 77, minutes: 51, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
	'Aruppukottai': {
        latitude: { degrees: 9, minutes: 31, direction: 'N' },
        longitude: { degrees: 78, minutes: 5, direction: 'E' },
        timezone: { hours: 5, minutes: 30, direction: 'E' },
        timezoneName: 'Asia/Kolkata',
        dst: false
    },
	'Oddanchatram': {
        latitude: { degrees: 10, minutes: 48, direction: 'N' },
        longitude: { degrees: 77, minutes: 75, direction: 'E' },
        timezone: { hours: 5, minutes: 30, direction: 'E' },
        timezoneName: 'Asia/Kolkata',
        dst: false
    },
	'Kovilpatti': {
        latitude: { degrees: 9, minutes: 17, direction: 'N' },
        longitude: { degrees: 77, minutes: 87, direction: 'E' },
        timezone: { hours: 5, minutes: 30, direction: 'E' },
        timezoneName: 'Asia/Kolkata',
        dst: false
    },
    'Sharjah, UAE': {
      latitude: { degrees: 25, minutes: 35, direction: 'N' },
      longitude: { degrees: 55, minutes: 42, direction: 'E' },
      timezone: { hours: 4, minutes: 0, direction: 'E' },
      timezoneName: 'UAE/Sharjah',
      dst: false
    },	
    'Mecklenburg County, NC': {
      latitude: { degrees: 35, minutes: 26, direction: 'N' },
      longitude: { degrees: 80, minutes: 85, direction: 'W' },
      timezone: { hours: 4, minutes: 0, direction: 'W' },
      timezoneName: 'America/North_Carolina',
      dst: true
    },
    'Ariyalur': {
      latitude: { degrees: 11, minutes: 8, direction: 'N' },
      longitude: { degrees: 79, minutes: 4, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Chengalpattu': {
      latitude: { degrees: 12, minutes: 41, direction: 'N' },
      longitude: { degrees: 79, minutes: 59, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Cuddalore': {
      latitude: { degrees: 11, minutes: 45, direction: 'N' },
      longitude: { degrees: 79, minutes: 46, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Dharmapuri': {
      latitude: { degrees: 12, minutes: 7, direction: 'N' },
      longitude: { degrees: 78, minutes: 10, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Dindigul': {
      latitude: { degrees: 10, minutes: 22, direction: 'N' },
      longitude: { degrees: 77, minutes: 58, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Kallakurichi': {
      latitude: { degrees: 11, minutes: 44, direction: 'N' },
      longitude: { degrees: 78, minutes: 58, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Kancheepuram': {
      latitude: { degrees: 12, minutes: 50, direction: 'N' },
      longitude: { degrees: 79, minutes: 42, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Karur': {
      latitude: { degrees: 10, minutes: 58, direction: 'N' },
      longitude: { degrees: 78, minutes: 5, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Mayiladuthurai': {
      latitude: { degrees: 11, minutes: 6, direction: 'N' },
      longitude: { degrees: 79, minutes: 39, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Nagercoil': {
      latitude: { degrees: 8, minutes: 11, direction: 'N' },
      longitude: { degrees: 77, minutes: 25, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Namakkal': {
      latitude: { degrees: 11, minutes: 13, direction: 'N' },
      longitude: { degrees: 78, minutes: 10, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Ooty': {
      latitude: { degrees: 11, minutes: 25, direction: 'N' },
      longitude: { degrees: 76, minutes: 42, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Perambalur': {
      latitude: { degrees: 11, minutes: 14, direction: 'N' },
      longitude: { degrees: 78, minutes: 53, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Ranipet': {
      latitude: { degrees: 12, minutes: 57, direction: 'N' },
      longitude: { degrees: 79, minutes: 19, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Sivagangai': {
      latitude: { degrees: 9, minutes: 51, direction: 'N' },
      longitude: { degrees: 78, minutes: 29, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tenkasi': {
      latitude: { degrees: 8, minutes: 58, direction: 'N' },
      longitude: { degrees: 77, minutes: 19, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tirupathur': {
      latitude: { degrees: 12, minutes: 37, direction: 'N' },
      longitude: { degrees: 78, minutes: 37, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tiruppur': {
      latitude: { degrees: 11, minutes: 7, direction: 'N' },
      longitude: { degrees: 77, minutes: 20, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Tiruvarur': {
      latitude: { degrees: 10, minutes: 46, direction: 'N' },
      longitude: { degrees: 79, minutes: 38, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },
    'Viluppuram': {
      latitude: { degrees: 11, minutes: 56, direction: 'N' },
      longitude: { degrees: 79, minutes: 29, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Kolkata',
      dst: false
    },	
	'Kandy': {
      latitude: { degrees: 7, minutes: 29, direction: 'N' },
      longitude: { degrees: 80, minutes: 63, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Colombo',
      dst: false
    }, 	
	'Trincomalee': {
      latitude: { degrees: 8, minutes: 58, direction: 'N' },
      longitude: { degrees: 81, minutes: 21, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' },
      timezoneName: 'Asia/Colombo',
      dst: false
    }
	};

  return cityData[cityName] || null;
}

const cityTamilNames = {
  'Arakkonam': 'அரக்கோணம்',
  'Chennai': 'சென்னை',
  'Tiruchirappalli': 'திருச்சிராப்பள்ளி',
  'Madurai': 'மதுரை',
  'Ramanathapuram': 'ராமனாதபுரம்',  
  'Vellore': 'வேலூர்',
  'Salem': 'சேலம்',
  'Coimbatore': 'கோயம்புத்தூர்',
  'Krishnagiri': 'கிருஷ்ணகிரி',
  'Tirunelveli': 'திருநெல்வேலி',
  'Kanyakumari': 'கன்னியாகுமரி',
  'Hyderabad': 'ஹைதராபாத்',
  'Bengaluru': 'பெங்களூரு',
  'Thiruvananthapuram': 'திருவனந்தபுரம்',
  'New Delhi': 'புதுதில்லி',
  'Mumbai': 'மும்பை',
  'Kolkata': 'கொல்கத்தா',
  'London': 'லண்டன்',
  'Colombo': 'கொழும்பு',
  'New York, NY': 'நியூயார்க்',
  'Westlake, OH': 'வெஸ்ட்லேக்',
  'San Francisco, CA': 'சான் பிரான்சிஸ்கோ',
  'Chicago, IL': 'சிகாகோ',
  'Houston, TX': 'ஹூஸ்டன்',
  'Phoenix, AZ': 'பீனிக்ஸ்',
  'Sattur': 'சாத்தூர்',
  'Pondichery': 'பாண்டிச்சேரி', 
  'Mettur': 'மேட்டூர்', 
  'Tuticorin': 'தூத்துக்குடி',
  'Theni': 'தேனி',  
  'Udumalaipettai': 'உடுமலைப்பேட்டை',  
  'Thanjavur': 'தஞ்சாவூர்',    
  'Musiri': 'முசிரி',
  'Madurantakam': 'மதுராந்தகம்',
  'Cheyyaru': 'செய்யாறு', 
  'Paramakudi': 'பரமக்குடி',
  'Erode': 'ஈரோடு', 
  'Tiruvannamalai': 'திருவண்ணாமலை',
  'Gopichettipalayam': 'கோபிச்செட்டிபாளையம்', 
  'Rajapalayam': 'ராஜபாளையம்', 
  'Virudhunagar': 'விருதுநகர்',  
  'Nagapattinam': 'நாகப்பட்டினம்', 
  'Pudukkottai': 'புதுக்கோட்டை',    
  'Thiruvallur': 'திருவள்ளூர்',
  'Palani': 'பழனி',      
  'Aruppukottai': 'அருப்புக்கோட்டை ', 
  'Oddanchatram': 'ஒட்டன்சத்திரம் ',
  'Kovilpatti': 'கோவில்பட்டி ',
  'Sharjah': 'ஷார்ஜா ',
  'Mecklenburg County, NC': 'மெக்லன்பர் கவுண்டி',
  'Ariyalur': 'அரியலூர்',
  'Chengalpattu': 'செங்கல்பட்டு',
  'Cuddalore': 'கடலூர்',
  'Dharmapuri': 'தருமபுரி',
  'Dindigul': 'திண்டுக்கல்',
  'Kallakurichi': 'கள்ளக்குறிச்சி',
  'Kancheepuram': 'காஞ்சிபுரம்',
  'Karur': 'கரூர்',
  'Mayiladuthurai': 'மயிலாடுதுறை',
  'Nagercoil': 'நாகர்கோவில்',
  'Namakkal': 'நாமக்கல்',
  'Ooty': 'ஊட்டி',
  'Perambalur': 'பெரம்பலூர்',
  'Ranipet': 'இராணிப்பேட்டை',
  'Sivagangai': 'சிவகங்கை',
  'Tenkasi': 'தென்காசி',
  'Tirupathur': 'திருப்பத்தூர்',
  'Tiruppur': 'திருப்பூர்',
  'Tiruvarur': 'திருவாரூர்',
  'Viluppuram': 'விழுப்புரம்',
  'Kandy': 'கண்டி',
  'Trincomalee':'திருகோணமலை'
};


/**
 * Adjusts timezone if city observes Daylight Saving Time.
 * Returns corrected timezone object.
 */
function getCurrentTimezone(cityInfo, cityName, date = new Date()) {
  if (!cityInfo.dst) {
    return cityInfo.timezone;
  }

  const year = date.getFullYear();
  let isDST = false;

  if (cityName.includes('London')) {
    const lastSundayMarch = getLastSundayOfMonth(year, 2); // March
    const lastSundayOctober = getLastSundayOfMonth(year, 9); // October
    isDST = (date >= lastSundayMarch && date < lastSundayOctober);
  } else {
    const secondSundayMarch = getNthSundayOfMonth(year, 2, 3); // March
    const firstSundayNovember = getNthSundayOfMonth(year, 1, 11); // November
    isDST = (date >= secondSundayMarch && date < firstSundayNovember);
  }

  if (isDST) {
    const offsetSign = cityInfo.timezone.direction === 'E' ? 1 : -1;
    const standardMinutes = offsetSign * (cityInfo.timezone.hours * 60 + cityInfo.timezone.minutes);
    const dstMinutes = standardMinutes + 60; 
    const adjustedSign = dstMinutes >= 0 ? 'E' : 'W';

    return { 
      hours: Math.floor(Math.abs(dstMinutes) / 60), 
      minutes: Math.abs(dstMinutes) % 60, 
      direction: adjustedSign 
    };
  } else {
    return cityInfo.timezone;
  }
}


function getLastSundayOfMonth(year, month) {
  const lastDay = new Date(year, month + 1, 0);
  const dayOfWeek = lastDay.getDay();
  return new Date(year, month, lastDay.getDate() - dayOfWeek);
}

function getNthSundayOfMonth(year, nth, month) {
  let date = new Date(year, month - 1, 1);
  let sundayCount = 0;

  while (true) {
    if (date.getDay() === 0) {
      sundayCount++;
      if (sundayCount === nth) {
        return date;
      }
    }
    date.setDate(date.getDate() + 1);
  }
}
