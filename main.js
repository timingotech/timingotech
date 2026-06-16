const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
function sendemail(){
  Email.send({
      SecureToken:"841e0fb5-f92f-4c22-a580-55b533084c30",
      To : 'timingotech@gmail.com',
      From : 'taonuga@gmail.com',
      Subject : "New Contact Form Enquiry",
      Body :"Name: "+ document.getElementById("name").value +
            "<br>Message: "+ document.getElementById("message").value +
            "<br>Email: "+ document.getElementById("email").value
  }).then(
    message => alert("Message Sent Successfully")
  );
} 

window.addEventListener('load', () => {
	const loader = document.querySelector('.loading-animation');
	loader.style.display = 'none';
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });

  // Navbar color change on scroll
  window.addEventListener('scroll', () => {
	const header = document.querySelector('#header');
	if (window.scrollY > 100) {
	  header.style.background = 'rgba(255, 255, 255, 0.95)';
	} else {
	  header.style.background = 'rgba(255, 255, 255, 0.1)';
	}
  });

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
	revealElements.forEach(element => {
	  const elementTop = element.getBoundingClientRect().top;
	  if (elementTop < window.innerHeight - 100) {
		element.classList.add('revealed');
	  }
	});
  };
  window.addEventListener('scroll', revealOnScroll);

  document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkIfInView() {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInView = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (isInView && !item.classList.contains('fade-in')) {
          item.classList.add('fade-in');
        }
      });
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
  });

// ========================================================
//   EVIDENCE & ARCHIVE CENTER — DATA + RENDERING ENGINE
// ========================================================

const archiveData = [

  // =====================================================
  // MEDIA DATABASE
  // =====================================================
  {
    id: 'M001',
    title: 'A Youth-Led Digital Movement Is Reshaping How Africa Talks About Mental Health',
    organization: 'Global South World',
    date: 'February 2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Global South World covers how SereniMind\'s Africa Wellness Voices Initiative, led by Ridwan Oyenuga, is reshaping the continent\'s conversation on mental health through youth-driven digital advocacy.',
    link: 'https://globalsouthworld.com/article/a-youth-led-digital-movement-is-reshaping-how-africa-talks-about-mental-health',
    verified: true
  },
  {
    id: 'M002',
    title: 'Stigma, Economic Pressure Fuel Silent Mental Health Struggles Among Young Africans — Expert',
    organization: 'AllAfrica',
    date: 'February 11, 2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Expert Source',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'AllAfrica features Ridwan Oyenuga as expert on how stigma and economic pressure drive silent mental health struggles among young Africans, with commentary on policy gaps and digital solutions.',
    link: 'https://allafrica.com/stories/202602110131.html',
    verified: true
  },
  {
    id: 'M003',
    title: 'SereniMind & Mental Health Advocacy — Pan-African Feature',
    organization: 'AllAfrica',
    date: 'February 12, 2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Second AllAfrica feature covering the expanding footprint of SereniMind\'s mental health advocacy campaign across the continent, tracking reach across 25 African nations.',
    link: 'https://allafrica.com/stories/202602120590.html',
    verified: true
  },
  {
    id: 'M004',
    title: 'Stigma, Economic Pressure Fuel Silent Mental Health Struggles Among Young Africans — Expert',
    organization: 'MSN Africa',
    date: '2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Expert Source',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'MSN Africa Top Stories platforms Ridwan Oyenuga\'s expert analysis on the escalating mental health crisis among young Africans amid social and economic pressures.',
    link: 'https://www.msn.com/en-xl/africa/top-stories/stigma-economic-pressure-fuel-silent-mental-health-struggles-among-young-africans-expert/ar-AA1W7rPc',
    verified: true
  },
  {
    id: 'M005',
    title: 'Stigma, Economic Pressure Fuel Silent Mental Health Struggles Among Young Africans — Expert',
    organization: 'Premium Times',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Expert Source',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Premium Times — Nigeria\'s most-read online newspaper — features Ridwan Oyenuga as expert on how stigma and economic pressure are fuelling a silent youth mental health crisis across Africa.',
    link: 'https://www.premiumtimesng.com/news/headlines/855687-stigma-economic-pressure-fuel-silent-mental-health-struggles-among-young-africans-expert.html',
    verified: true
  },
  {
    id: 'M006',
    title: 'Nigerian Youth-Led Startup Takes Mental Health Campaign to 25 African Countries',
    organization: 'Business Day',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Tech Entrepreneurship',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Business Day reports on SereniMind\'s historic Africa Wellness Voices Initiative, which under Ridwan Oyenuga\'s leadership expanded a Nigerian healthtech startup\'s mental health campaign to 25 African countries.',
    link: 'https://businessday.ng/technology/article/nigerian-youth-led-startup-takes-mental-health-campaign-to-25-african-countries/',
    verified: true
  },
  {
    id: 'M007',
    title: 'Mental Health Pressure on African Youth Drives Rise in Digital Health Advocacy',
    organization: 'The Guardian Nigeria',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Digital Health',
    mediaType: 'Online News',
    role: 'Advocate',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Guardian Nigeria\'s opinion section features how youth-led digital health advocacy — spearheaded by SereniMind — is rising as a movement in direct response to the mental health burden facing African youth.',
    link: 'https://guardian.ng/opinion/mental-health-pressure-on-african-youth-drives-rise-in-digital-health-advocacy/',
    verified: true
  },
  {
    id: 'M008',
    title: 'SereniMind Launches Pan-African Digital Push on Youth Mental Health',
    organization: 'Leadership Newspaper',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Leadership Newspaper — one of Nigeria\'s most influential publications — covers SereniMind\'s landmark pan-African digital campaign launch, documenting the scope of Ridwan Oyenuga\'s continental mental health advocacy.',
    link: 'https://leadership.ng/serenimind-launches-pan-african-digital-push-on-youth-mental-health/',
    verified: true
  },
  {
    id: 'M009',
    title: 'Digital Advocacy Expands Across Africa to Tackle Youth Mental Health Crisis',
    organization: 'This Day Live',
    date: 'February 25, 2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Campaign Lead',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'This Day Live reports on the continental expansion of SereniMind\'s digital advocacy under Ridwan Oyenuga, framing the initiative as a significant and timely response to Africa\'s youth mental health crisis.',
    link: 'https://www.thisdaylive.com/2026/02/25/digital-advocacy-expands-across-africa-to-tackle-youth-mental-health-crisis/',
    verified: true
  },
  {
    id: 'M010',
    title: 'Mental Health Advocates Turn to Technology to Reach African Youths',
    organization: 'The Nation',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Digital Health',
    mediaType: 'Online News',
    role: 'Advocate',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'The Nation covers the growing movement of mental health advocates leveraging technology to reach African youth at scale, with SereniMind and Ridwan Oyenuga prominently featured at the forefront.',
    link: 'https://thenationonlineng.net/mental-health-advocates-turn-to-technology-to-reach-african-youths/',
    verified: true
  },
  {
    id: 'M011',
    title: 'Africa Wellness Voices Initiative Promotes Mental Wellbeing',
    organization: 'Business Post',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Campaign Lead',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Business Post\'s health desk covers the Africa Wellness Voices Initiative, detailing how Ridwan Oyenuga\'s campaign is actively promoting mental wellbeing among African communities through digital channels.',
    link: 'https://businesspost.ng/health/africa-wellness-voices-initiative-promotes-mental-wellbeing/',
    verified: true
  },
  {
    id: 'M012',
    title: 'SereniMind Launches Africa Wellness Voices Initiative',
    organization: 'Nigeria Startup Act',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Tech Entrepreneurship',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Nigeria Startup Act\'s platform highlights SereniMind\'s official AWVI launch, positioning Ridwan Oyenuga\'s work as a flagship example of socially impactful entrepreneurship within Nigeria\'s startup ecosystem.',
    link: 'https://nigeriastartupact.ng/serenimind-launches-africa-wellness-voices-initiative/',
    verified: true
  },
  {
    id: 'M013',
    title: 'Firm Launches Africa-Wide Digital Push on Youth Mental Health',
    organization: 'Daily Trust',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Daily Trust — one of Nigeria\'s most respected national newspapers — covers SereniMind\'s Africa-wide digital mental health push, documenting the ambition, reach, and community impact of the campaign.',
    link: 'https://dailytrust.com/firm-launches-africa-wide-digital-push-on-youth-mental-health/',
    verified: true
  },
  {
    id: 'M014',
    title: 'SereniMind Spurs Digital Innovation for African Youth Mental Wellness',
    organization: 'Vanguard',
    date: 'February 2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Digital Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Vanguard — Nigeria\'s largest-circulation daily newspaper — profiles SereniMind\'s digital innovation approach to African youth mental wellness, spotlighting Ridwan Oyenuga\'s technology-first leadership model.',
    link: 'https://www.vanguardngr.com/2026/02/serenimind-spurs-digital-innovation-for-african-youth-mental-wellness/',
    verified: true
  },
  {
    id: 'M015',
    title: 'African Youth Drive Digital Movement Amid Escalating Mental Health Burden',
    organization: 'Independent',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Youth Advocacy',
    mediaType: 'Online News',
    role: 'Advocate',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Independent Nigeria covers how African youth, galvanised by SereniMind\'s AWVI campaign, are driving a powerful digital movement to address the continent\'s escalating mental health burden.',
    link: 'https://independent.ng/african-youth-drive-digital-movement-amid-escalating-mental-health-burden/',
    verified: true
  },
  {
    id: 'M016',
    title: 'Nigerian HealthTech Startup SereniMind Launches Digital Campaign to Tackle Mental Health Across 25 African Countries',
    organization: 'TechParley',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Tech Entrepreneurship',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'TechParley positions Ridwan Oyenuga as a leading voice in African healthtech, covering SereniMind\'s landmark 25-country digital mental health campaign and its broader implications for the continent\'s tech ecosystem.',
    link: 'https://techparley.com/nigerian-healthtech-startup-serenimind-launches-digital-campaign-to-tackle-mental-health-across-25-african-countries/',
    verified: true
  },
  {
    id: 'M017',
    title: 'Mental Health Strain Deepens Among African Youth Amid Economic Uncertainty, Insecurity',
    organization: 'News Express',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Expert Source',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'News Express covers the deepening mental health strain among African youth against a backdrop of economic uncertainty and insecurity, featuring Ridwan Oyenuga\'s insights on digital solutions and policy advocacy.',
    link: 'https://newsexpressngr.com/news/296491/mental-health-strain-deepens-among-african-youth-amid-economic-uncertainty-insecurity',
    verified: true
  },
  {
    id: 'M018',
    title: 'How Technology Is Changing Mental Health Support for Africa\'s Youth',
    organization: 'ETA Magazine',
    date: '2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Digital Health',
    mediaType: 'Magazine',
    role: 'Founder / CEO',
    initiative: 'SereniMind',
    description: 'ETA Magazine\'s feature explores how technology — specifically SereniMind\'s AI-powered platform — is fundamentally changing the landscape of mental health support for Africa\'s next generation.',
    link: 'https://www.etamagazine.com/how-technology-is-changing-mental-health-support-for-africas-youth/',
    verified: true
  },
  {
    id: 'M019',
    title: 'Youth-Driven Digital Health Movement Unites African Voices on Mental Wellness',
    organization: 'Hubz Media Africa',
    date: '2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Youth Advocacy',
    mediaType: 'Online News',
    role: 'Campaign Lead',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Hubz Media Africa documents how SereniMind\'s youth-driven AWVI campaign is successfully uniting African voices across 25 countries in a unified call for better mental health systems and advocacy.',
    link: 'https://www.hubzmedia.africa/youth-driven-digital-health-movement-unites-african-voices-on-mental-wellness/',
    verified: true
  },
  {
    id: 'M020',
    title: 'SereniMind Lance la Campagne Africa Wellness Voices pour le Bien-être Mental des Jeunes Africains',
    organization: 'Le Regard (French Media)',
    date: '2026',
    year: '2026',
    country: 'France',
    category: 'Media Coverage',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Online News',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'French-language international media Le Regard covers SereniMind\'s AWVI launch, marking Ridwan Oyenuga\'s breakthrough into Francophone African and European media markets — evidence of truly global media reach.',
    link: 'https://leregard.info/serenimind-lance-la-campagne-initiative-africa-wellness-voices-pour-le-bien-etre-mental-des-jeunes-africains/',
    verified: true
  },

  // =====================================================
  // INTERVIEW DATABASE
  // =====================================================
  {
    id: 'I001',
    title: '"My Journey with Mental Health Began from a Deeply Personal Place" — Ridwan Oyenuga',
    organization: 'Africa Mental Health',
    date: '2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Interview',
    database: 'INTERVIEW',
    impactArea: 'Mental Health',
    mediaType: 'Blog / Feature',
    role: 'Founder / CEO',
    initiative: 'SereniMind',
    description: 'An in-depth personal interview in which Ridwan Oyenuga opens up about his deeply personal journey with mental health, the founding story behind SereniMind, and his mission to democratise mental health access across Africa.',
    link: 'https://africamentalhealth.com/my-journey-with-mental-health-began-from-a-deeply-personal-place-ridwan-oyenuga/',
    verified: true
  },

  // =====================================================
  // MEDIA DATABASE — BROADCAST / VIDEO
  // =====================================================
  {
    id: 'B001',
    title: 'Ridwan Oyenuga — Video Broadcast Appearance on SereniMind & AWVI',
    organization: 'YouTube',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Broadcast',
    database: 'MEDIA',
    impactArea: 'Mental Health',
    mediaType: 'Video',
    role: 'Founder / CEO',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'Recorded broadcast/video appearance featuring Ridwan Oyenuga discussing SereniMind\'s vision, the Africa Wellness Voices Initiative, and the state of youth mental health advocacy across the continent.',
    link: 'https://www.youtube.com/watch?v=UrhB828ZLFQ',
    verified: true
  },

  // =====================================================
  // LEADERSHIP DATABASE — ADVISORY BOARD
  // =====================================================
  {
    id: 'L001',
    title: 'SereniMind Founder Ridwan Oyenuga Gets Seat on West Africa Peace Advisory Council',
    organization: 'West Africa Peace Advisory Council / Business Post',
    date: '2026',
    year: '2026',
    country: 'Nigeria',
    category: 'Advisory Board',
    database: 'LEADERSHIP',
    impactArea: 'Peace & Security',
    mediaType: 'Online News',
    role: 'Advisory Member',
    initiative: 'West Africa Peace Advisory Council',
    description: 'Ridwan Oyenuga is appointed to the West Africa Peace Advisory Council — a landmark recognition of his leadership influence extending beyond mental health into regional peace, security, and governance at the highest levels.',
    link: 'https://businesspost.ng/jobs/serenimind-founder-ridwan-oyenuga-gets-seat-on-west-africa-peace-advisory-council/',
    verified: true
  },
  {
    id: 'L002',
    title: 'Director of Public Relations — BUSA (Babcock University Student Association)',
    organization: 'BUSA',
    date: 'July 2024 – Present',
    year: '2024',
    country: 'Nigeria',
    category: 'Organizational Leadership',
    database: 'LEADERSHIP',
    impactArea: 'Youth Leadership',
    mediaType: 'Official Platform',
    role: 'Founder / CEO',
    initiative: 'SereniMind',
    description: 'Appointed as Director of Public Relations at BUSA (Babcock University Student Association), overseeing all external communication, media strategy, and public engagement for one of Nigeria\'s largest student bodies.',
    link: '#',
    verified: true
  },

  // =====================================================
  // LEADERSHIP DATABASE — STARTUP & INNOVATION
  // =====================================================
  {
    id: 'S001',
    title: 'SereniMind — AI-Powered Mental Health Platform (Founded 2024)',
    organization: 'SereniMind',
    date: '2024',
    year: '2024',
    country: 'Nigeria',
    category: 'Startup & Innovation',
    database: 'LEADERSHIP',
    impactArea: 'Digital Health',
    mediaType: 'Official Platform',
    role: 'Founder / CEO',
    initiative: 'SereniMind',
    description: 'SereniMind is Ridwan Oyenuga\'s flagship AI-powered mental health platform, integrating intelligent chatbot support, mood-based recommendations, advanced sentiment analysis, personalised therapy suggestions, and a Pan-African wellness community. Founded 2024.',
    link: 'https://www.serenimind.com.ng',
    verified: true
  },
  {
    id: 'S002',
    title: 'Africa Wellness Voices Initiative (AWVI) — Pan-African Mental Health Digital Campaign',
    organization: 'SereniMind',
    date: 'February 2026',
    year: '2026',
    country: 'Pan-Africa',
    category: 'Digital Campaign',
    database: 'LEADERSHIP',
    impactArea: 'Pan-African Development',
    mediaType: 'Official Platform',
    role: 'Campaign Lead',
    initiative: 'Africa Wellness Voices Initiative',
    description: 'The Africa Wellness Voices Initiative (AWVI) is Ridwan Oyenuga\'s landmark Pan-African digital campaign expanding mental health advocacy to 25 African countries, building a continent-wide movement that unites voices across borders for youth mental wellness.',
    link: 'https://www.serenimind.com.ng/awvi',
    verified: true
  },

];

// ---- Database badge colour map ----
const dbColors = {
  MEDIA:       { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  INTERVIEW:   { bg: '#faf5ff', text: '#7c3aed', border: '#ddd6fe' },
  SPEAKING:    { bg: '#ecfdf5', text: '#059669', border: '#a7f3d0' },
  RECOGNITION: { bg: '#fffbeb', text: '#d97706', border: '#fde68a' },
  PARTNERSHIP: { bg: '#e0f2fe', text: '#0369a1', border: '#bae6fd' },
  PUBLICATION: { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  LEADERSHIP:  { bg: '#fff1f2', text: '#be123c', border: '#fecdd3' }
};

function getDbColor(db) { return dbColors[db] || { bg: '#f3f4f6', text: '#4b5563', border: '#e5e7eb' }; }

function buildArchiveCard(item) {
  const c = getDbColor(item.database);
  const badgeStyle = `background:${c.bg};color:${c.text};border-color:${c.border}`;
  const evidenceBtn = item.link
    ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="archive-evidence-btn">View <span class="btn-arrow">&#8594;</span></a>`
    : '';

  return `
    <div class="archive-card" data-id="${item.id}" data-db="${item.database}" data-cat="${item.category}">
      <div class="archive-card-header">
        <span class="archive-db-badge" style="${badgeStyle}">${item.database}</span>
        <span class="archive-category-tag">${item.category}</span>
        ${item.verified ? '<span class="verified-badge">&#10003; Verified</span>' : ''}
      </div>
      <div class="archive-card-body">
        <h3 class="archive-card-title">${item.title}</h3>
        <div class="archive-card-meta">
          <span class="meta-item"><span class="meta-icon">&#127970;</span>${item.organization}</span>
          <span class="meta-item"><span class="meta-icon">&#128197;</span>${item.date}</span>
          <span class="meta-item"><span class="meta-icon">&#127758;</span>${item.country}</span>
        </div>
        <div class="archive-card-tags">
          <span class="archive-tag impact-tag">${item.impactArea}</span>
          <span class="archive-tag media-tag">${item.mediaType}</span>
          <span class="archive-tag role-tag">${item.role}</span>
        </div>
        <p class="archive-card-description">${item.description}</p>
      </div>
      <div class="archive-card-footer">
        <div class="initiative-label"><span class="meta-icon">&#9889;</span><span>${item.initiative}</span></div>
        ${evidenceBtn}
      </div>
    </div>`;
}

function renderArchiveCards(data) {
  const grid      = document.getElementById('archiveGrid');
  const noResults = document.getElementById('noResults');
  const countEl   = document.getElementById('archiveResultCount');
  const totalEl   = document.getElementById('totalEntries');
  if (!grid) return;

  if (totalEl) totalEl.textContent = archiveData.length;

  if (data.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (countEl) countEl.textContent = '0 entries found';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  if (countEl) countEl.textContent = `${data.length} ${data.length === 1 ? 'entry' : 'entries'} found`;
  grid.innerHTML = data.map(buildArchiveCard).join('');
}

function filterArchive() {
  const search    = (document.getElementById('archiveSearch')?.value || '').toLowerCase().trim();
  const year      = document.getElementById('filterYear')?.value      || '';
  const country   = document.getElementById('filterCountry')?.value   || '';
  const category  = document.getElementById('filterCategory')?.value  || '';
  const impact    = document.getElementById('filterImpactArea')?.value || '';
  const media     = document.getElementById('filterMediaType')?.value  || '';
  const role      = document.getElementById('filterRole')?.value       || '';
  const initiative= document.getElementById('filterInitiative')?.value || '';
  const activeDb  = document.querySelector('.db-tab.active')?.dataset.db || 'ALL';

  let filtered = archiveData.filter(item => {
    if (activeDb !== 'ALL' && item.database !== activeDb) return false;
    if (year      && item.year      !== year)      return false;
    if (country   && item.country   !== country)   return false;
    if (category  && item.category  !== category)  return false;
    if (impact    && item.impactArea !== impact)   return false;
    if (media     && item.mediaType !== media)     return false;
    if (role      && item.role      !== role)      return false;
    if (initiative && item.initiative !== initiative) return false;
    if (search) {
      const blob = `${item.title} ${item.organization} ${item.description} ${item.category} ${item.impactArea} ${item.initiative}`.toLowerCase();
      if (!blob.includes(search)) return false;
    }
    return true;
  });

  if (filtered.length === 0) filtered = archiveData;

  renderArchiveCards(filtered);
}

function filterByDbCategory(cat) {
  const sel = document.getElementById('filterCategory');
  if (sel) sel.value = cat;
  document.querySelectorAll('.db-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.db-tab[data-db="ALL"]')?.classList.add('active');
  filterArchive();
  setTimeout(() => document.getElementById('archiveGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
}

function initArchive() {
  if (!document.getElementById('archiveGrid')) return;

  renderArchiveCards(archiveData);

  // DB tab switching
  document.querySelectorAll('.db-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.db-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterArchive();
    });
  });

  // Search
  document.getElementById('archiveSearch')?.addEventListener('input', filterArchive);

  // Filter dropdowns
  ['filterYear','filterCountry','filterCategory','filterImpactArea','filterMediaType','filterRole','filterInitiative']
    .forEach(id => document.getElementById(id)?.addEventListener('change', filterArchive));

  // Clear all
  document.getElementById('clearAllFilters')?.addEventListener('click', () => {
    const ids = ['archiveSearch','filterYear','filterCountry','filterCategory','filterImpactArea','filterMediaType','filterRole','filterInitiative'];
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    document.querySelectorAll('.db-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.db-tab[data-db="ALL"]')?.classList.add('active');
    filterArchive();
  });

  // Grid / List view toggle
  const archiveGrid = document.getElementById('archiveGrid');
  document.getElementById('gridViewBtn')?.addEventListener('click', () => {
    archiveGrid?.classList.remove('list-view-mode');
    document.getElementById('gridViewBtn')?.classList.add('active');
    document.getElementById('listViewBtn')?.classList.remove('active');
  });
  document.getElementById('listViewBtn')?.addEventListener('click', () => {
    archiveGrid?.classList.add('list-view-mode');
    document.getElementById('listViewBtn')?.classList.add('active');
    document.getElementById('gridViewBtn')?.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', initArchive);