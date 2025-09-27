// St. Michael Chaplet Interactive Web App
class ChapletApp {
    constructor() {
        this.currentStep = 0;
        this.totalSteps = 0;
        this.prayers = this.initializePrayers();
        this.totalSteps = this.prayers.length;
        this.init();
    }

    initializePrayers() {
        return [
            // Part 1: Medal prayers
            {
                id: 'sign-of-cross-1',
                title: 'Sign of the Cross',
                text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
                beadType: 'medal',
                position: 'medal'
            },
            {
                id: 'introductory',
                title: 'Introductory Prayer',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
                beadType: 'medal',
                position: 'medal'
            },
            
            // Part 2: Nine Salutations (each with Our Father + 3 Hail Marys)
            ...this.generateSalutations(),
            
            // Part 3: Concluding prayers on four beads
            {
                id: 'michael-honor',
                title: 'In Honor of St. Michael',
                text: 'Our Father, Who art in heaven, Hallowed be Thy Name; Thy Kingdom come; Thy Will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
                beadType: 'small',
                position: 'concluding-1'
            },
            {
                id: 'gabriel-honor',
                title: 'In Honor of St. Gabriel',
                text: 'Our Father, Who art in heaven, Hallowed be Thy Name; Thy Kingdom come; Thy Will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
                beadType: 'small',
                position: 'concluding-2'
            },
            {
                id: 'raphael-honor',
                title: 'In Honor of St. Raphael',
                text: 'Our Father, Who art in heaven, Hallowed be Thy Name; Thy Kingdom come; Thy Will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
                beadType: 'small',
                position: 'concluding-3'
            },
            {
                id: 'guardian-honor',
                title: 'In Honor of Our Guardian Angel',
                text: 'Our Father, Who art in heaven, Hallowed be Thy Name; Thy Kingdom come; Thy Will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
                beadType: 'small',
                position: 'concluding-4'
            },
            
            // Part 4: Final prayers
            {
                id: 'concluding-prayer',
                title: 'Concluding Prayer',
                text: 'O glorious prince St. Michael, chief and commander of the heavenly hosts, guardian of souls, vanquisher of rebel spirits, servant in the house of the Divine King and our admirable conductor, you who shine with excellence and superhuman virtue, deliver us from all evil, who turn to you with confidence and enable us by your gracious protection to serve God more and more faithfully every day. Amen.<br><br><strong>Leader:</strong> Pray for us, O glorious St. Michael, Prince of the Church of Jesus Christ.<br><strong>Response:</strong> That we may be made worthy of His promises.',
                beadType: 'medal',
                position: 'medal'
            },
            {
                id: 'final-prayer',
                title: 'Final Prayer',
                text: 'Almighty and Everlasting God, Who, by a prodigy of goodness and a merciful desire for the salvation of all men, has appointed the most glorious Archangel St. Michael Prince of Your Church, make us worthy, we ask You, to be delivered from all our enemies, that none of them may harass us at the hour of death, but that we may be conducted by him into the august presence of Your Divine Majesty. This we beg through the merits of Jesus Christ Our Lord. Amen.',
                beadType: 'medal',
                position: 'medal'
            },
            {
                id: 'sign-of-cross-final',
                title: 'Sign of the Cross',
                text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
                beadType: 'medal',
                position: 'medal'
            }
        ];
    }

    generateSalutations() {
        const salutations = [
            'By the intercession of St. Michael and the celestial Choir of Seraphim, may the Lord make us worthy to burn with the fire of perfect charity. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Cherubim, may the Lord grant us the grace to leave the ways of sin and run in the paths of Christian perfection. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Thrones, may the Lord infuse into our hearts a true and sincere spirit of humility. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Dominions, may the Lord give us grace to govern our senses and overcome any unruly passions. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Virtues, may the Lord preserve us from evil and falling into temptation. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Powers, may the Lord protect our souls against the snares and temptations of the devil. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Principalities, may God fill our souls with a true spirit of obedience. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Archangels, may the Lord give us perseverance in faith and in all good works in order that we may attain the glory of Heaven. Amen.',
            'By the intercession of St. Michael and the celestial Choir of Angels, may the Lord grant us to be protected by them in this mortal life and conducted in the life to come to Heaven. Amen.'
        ];

        const ourFather = 'Our Father, Who art in heaven, Hallowed be Thy Name; Thy Kingdom come; Thy Will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.';
        const hailMary = 'Hail Mary, full of grace, the Lord is with thee; Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.';

        const prayers = [];
        
        salutations.forEach((salutation, index) => {
            // Add the salutation prayer
            prayers.push({
                id: `salutation-${index + 1}`,
                title: `${this.getOrdinal(index + 1)} Salutation`,
                text: salutation,
                beadType: 'large',
                position: `salutation-${index + 1}`
            });
            
            // Add Our Father
            prayers.push({
                id: `our-father-${index + 1}`,
                title: 'Our Father',
                text: ourFather,
                beadType: 'small',
                position: `salutation-${index + 1}-our-father`
            });
            
            // Add 3 Hail Marys
            for (let i = 1; i <= 3; i++) {
                prayers.push({
                    id: `hail-mary-${index + 1}-${i}`,
                    title: 'Hail Mary',
                    text: hailMary,
                    beadType: 'small',
                    position: `salutation-${index + 1}-hail-mary-${i}`
                });
            }
        });
        
        return prayers;
    }

    getOrdinal(num) {
        const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'];
        return ordinals[num - 1] || `${num}th`;
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <!-- Mobile Layout (below lg) -->
            <div class="lg:hidden min-h-screen flex flex-col relative z-10">
                <!-- Mobile Header -->
                <header class="text-center py-3 px-4 flex-shrink-0">
                    <h1 class="font-serif text-2xl sm:text-3xl font-light text-gold mb-2">
                        Chaplet of St. Michael
                    </h1>
                    <p class="font-sans text-sm sm:text-base text-cream/80 max-w-2xl mx-auto px-2">
                        An interactive guide to praying the Chaplet of St. Michael the Archangel
                    </p>
                </header>

                <!-- Mobile Chaplet Visual -->
                <div class="flex justify-center items-center py-6 flex-shrink-0">
                    ${this.renderChaplet()}
                </div>

                <!-- Mobile Prayer Display with fixed spacing -->
                <div class="flex-1 flex flex-col px-4 pb-4 min-h-0">
                    <div class="flex-1 flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
                        ${this.renderPrayerCard()}
                    </div>
                    
                    <!-- Mobile Controls -->
                    <div class="flex-shrink-0 pt-4">
                        ${this.renderControls()}
                    </div>
                </div>
            </div>

            <!-- Desktop Layout (lg and above) -->
            <div class="hidden lg:block container mx-auto px-4 py-8 relative z-10">
                <header class="text-center mb-8">
                    <h1 class="font-serif text-4xl md:text-6xl font-light text-gold mb-4">
                        Chaplet of St. Michael
                    </h1>
                    <p class="font-sans text-lg text-cream/80 max-w-2xl mx-auto">
                        An interactive guide to praying the Chaplet of St. Michael the Archangel
                    </p>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <!-- Chaplet Visual -->
                    <div class="flex justify-center items-center">
                        <div class="relative">
                            ${this.renderChaplet()}
                        </div>
                    </div>

                    <!-- Prayer Display -->
                    <div class="flex flex-col justify-center">
                        ${this.renderPrayerCard()}
                        ${this.renderControls()}
                    </div>
                </div>
            </div>
        `;
    }

    renderChaplet() {
        return `
            <div class="relative w-80 h-80 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96" id="chaplet-container">
                <!-- Chaplet cord background -->
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(192, 192, 192, 0.3)" stroke-width="3"/>
                    <!-- Connecting lines for concluding beads -->
                    <line x1="200" y1="40" x2="200" y2="120" stroke="rgba(192, 192, 192, 0.3)" stroke-width="2"/>
                </svg>
                
                <!-- Medal at top -->
                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
                    ${this.renderBead('medal', 0)}
                    ${this.renderBead('medal', 1)}
                </div>
                
                <!-- Concluding beads (vertical line) -->
                <div class="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
                    ${this.renderConcludingBeads()}
                </div>
                
                <!-- Crucifix in center of circle -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    ${this.renderCrucifix()}
                </div>
                
                <!-- Main circular beads -->
                <div class="absolute inset-0">
                    ${this.renderCircularBeads()}
                </div>
            </div>
        `;
    }

    renderCrucifix() {
        return `
            <div class="w-8 h-9 sm:w-9 sm:h-10 md:w-10 md:h-11 lg:w-8 lg:h-10 xl:w-10 xl:h-12 bg-gradient-to-b from-gold to-yellow-600 rounded-sm border-2 border-yellow-300 flex items-center justify-center text-midnight font-bold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl crucifix-glow shadow-lg">
                ✝
            </div>
        `;
    }

    renderCircularBeads() {
        let beadsHtml = '';
        const radius = 160; // Radius for the main circle
        const centerX = 200; // Center of the 400x400 viewBox
        const centerY = 200;
        
        // 9 salutations, each with 1 large bead + 4 small beads
        for (let salutation = 0; salutation < 9; salutation++) {
            const baseAngle = (salutation * 40) - 90; // Start from top, 40 degrees apart
            
            // Large bead for salutation
            const largeAngle = baseAngle * (Math.PI / 180);
            const largeX = centerX + radius * Math.cos(largeAngle);
            const largeY = centerY + radius * Math.sin(largeAngle);
            
            const salutationIndex = 2 + (salutation * 5); // Starting after medal prayers
            
            // Position the large bead
            const largeLeft = ((largeX / 400) * 100) + '%';
            const largeTop = ((largeY / 400) * 100) + '%';
            
            beadsHtml += `
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2" 
                     style="left: ${largeLeft}; top: ${largeTop};">
                    ${this.renderBead('large', salutationIndex)}
                </div>
            `;
            
            // Small beads (Our Father + 3 Hail Marys) positioned closer to center
            for (let small = 0; small < 4; small++) {
                // Special handling for perfect symmetry
                let angleOffset, beadSpacing;
                
                if (salutation === 0) {
                    // Top salutation - needs more offset to avoid medal beads
                    angleOffset = 12;
                    beadSpacing = 5.5;
                } else if (salutation === 4) {
                    // Bottom salutation - align straight down from cross
                    angleOffset = 8;
                    beadSpacing = 6;
                } else {
                    // All other salutations - uniform spacing
                    angleOffset = 8;
                    beadSpacing = 6;
                }
                
                const smallAngle = (baseAngle + angleOffset + (small * beadSpacing)) * (Math.PI / 180);
                const smallRadius = radius - 35; // Consistent radius for all
                const smallX = centerX + smallRadius * Math.cos(smallAngle);
                const smallY = centerY + smallRadius * Math.sin(smallAngle);
                
                const smallIndex = salutationIndex + 1 + small;
                const smallLeft = ((smallX / 400) * 100) + '%';
                const smallTop = ((smallY / 400) * 100) + '%';
                
                beadsHtml += `
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2" 
                         style="left: ${smallLeft}; top: ${smallTop};">
                        ${this.renderBead('small', smallIndex)}
                    </div>
                `;
            }
        }
        
        return beadsHtml;
    }

    renderConcludingBeads() {
        const concludingStart = 2 + (9 * 5); // After all salutations
        let beadsHtml = '';
        
        // 4 concluding beads in a vertical line
        for (let i = 0; i < 4; i++) {
            beadsHtml += this.renderBead('small', concludingStart + i);
        }
        
        return beadsHtml;
    }

    renderBead(type, index) {
        const isActive = index === this.currentStep;
        const isCompleted = index < this.currentStep;
        const activeClass = isActive ? 'active' : '';
        const completedClass = isCompleted ? 'completed' : '';
        
        let beadClasses = 'bead cursor-pointer transform transition-all duration-300 hover:scale-110';
        let beadStyles = '';
        
        if (type === 'medal') {
            beadClasses += ' w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 lg:w-6 lg:h-8 bg-gold rounded-lg border-2 border-yellow-300';
        } else if (type === 'large') {
            beadClasses += ' w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-4 lg:h-4 bg-royal border-2 border-gold rounded-full';
        } else if (type === 'small') {
            beadClasses += ' w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-3 lg:h-3 bg-silver border border-gray-300 rounded-full';
        }
        
        return `
            <div class="${beadClasses} ${activeClass} ${completedClass}"
                 data-step="${index}"
                 style="${beadStyles}">
            </div>
        `;
    }



    renderPrayerCard() {
        if (this.currentStep >= this.totalSteps) {
            return this.renderCompletionCard();
        }
        
        const currentPrayer = this.prayers[this.currentStep];
        
        return `
            <div class="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 fade-in w-full">
                <div class="mb-3 sm:mb-4">
                    <h2 class="font-serif text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gold mb-2">
                        ${currentPrayer.title}
                    </h2>
                    <p class="text-xs sm:text-sm text-cream/60 font-sans">
                        Step ${this.currentStep + 1} of ${this.totalSteps}
                    </p>
                </div>
                
                <div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                    <p class="font-sans text-cream leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg">
                        ${currentPrayer.text}
                    </p>
                </div>
            </div>
        `;
    }

    renderCompletionCard() {
        return `
            <div class="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 text-center celebration w-full">
                <div class="mb-4 sm:mb-6">
                    <div class="text-4xl sm:text-5xl lg:text-6xl mb-4">✨</div>
                    <h2 class="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-gold mb-4">
                        Chaplet Completed
                    </h2>
                </div>
                
                <div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-4 sm:mb-6">
                    <p class="font-sans text-cream leading-relaxed text-sm sm:text-base lg:text-lg">
                        You have completed the Chaplet of St. Michael. May the Archangel defend you in battle and be your safeguard against the wickedness and snares of the devil.
                    </p>
                </div>
                
                <button id="restart-btn" 
                        class="bg-gold text-midnight px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-sans font-medium text-sm sm:text-base hover:bg-yellow-400 transition-colors">
                    Pray Again
                </button>
            </div>
        `;
    }

    renderControls() {
        if (this.currentStep >= this.totalSteps) return '';
        
        return `
            <div class="flex justify-between items-center gap-3 lg:mt-6">
                <button id="prev-btn" 
                        ${this.currentStep === 0 ? 'disabled' : ''}
                        class="bg-royal text-cream px-3 sm:px-4 lg:px-4 py-2 lg:py-2 rounded-lg font-sans text-sm sm:text-base hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-1 lg:flex-none">
                    Previous
                </button>
                
                <button id="next-btn" 
                        class="bg-gold text-midnight px-4 sm:px-5 lg:px-6 py-2 lg:py-2 rounded-lg font-sans font-medium text-sm sm:text-base hover:bg-yellow-400 transition-colors flex-1 lg:flex-none">
                    Continue
                </button>
            </div>
        `;
    }

    goToStep(step) {
        if (step >= 0 && step < this.totalSteps) {
            this.currentStep = step;
            this.render();
        }
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.render();
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.render();
        }
    }

    restart() {
        this.currentStep = 0;
        this.render();
    }

    attachEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.nextStep();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousStep();
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.goToStep(0);
            }
        });

        // Button and bead click handling with event delegation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('bead')) {
                const step = parseInt(e.target.getAttribute('data-step'));
                if (!isNaN(step)) {
                    this.goToStep(step);
                }
            } else if (e.target.id === 'next-btn') {
                this.nextStep();
            } else if (e.target.id === 'prev-btn') {
                this.previousStep();
            } else if (e.target.id === 'restart-btn') {
                this.restart();
            }
        });
    }
}

// Initialize the app
let chapletApp;
document.addEventListener('DOMContentLoaded', () => {
    chapletApp = new ChapletApp();
});

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}