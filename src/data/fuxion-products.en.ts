// English text for /tienda/en. This is a faithful translation of the Spanish
// wording in fuxion-products.ts (FuXion's official Spanish catalog), with the
// same compliance edits. Prices, images and links stay in the Spanish file.

import type { FuxionProduct, ProductLineId } from "./fuxion-products";

export type ProductText = Pick<
  FuxionProduct,
  "tagline" | "description" | "benefits" | "ingredients" | "size" | "flavor" | "notes"
>;

export const lineNamesEn: Record<ProductLineId, { name: string; chip: string }> = {
  limpia: { name: "Cleanse your body", chip: "Cleanse your body" },
  regenera: { name: "Regenerate your cells", chip: "Regenerate your cells" },
  revitaliza: { name: "Revitalize your energy", chip: "Revitalize your energy" },
  inmunologica: { name: "Immune line", chip: "Immune" },
  peso: { name: "Weight and measurement control line", chip: "Weight control" },
  "anti-edad": { name: "Anti-aging line", chip: "Anti-aging" },
  "vigor-mental": { name: "Mental vigor line", chip: "Mental vigor" },
  sport: { name: "Sport line", chip: "Sport" },
};

const DIET = "(*) Together with a balanced diet and exercise.";
const SACHETS_5G = "28 sachets × 5 g";
const DOYPACK = "Doypack · 28 × 5 g";
const SACHETS_25G = "14 sachets × 25 g";

export const productsEn: Record<string, ProductText> = {
  "flora-liv": {
    tagline: "Protect your body from within!",
    description:
      "Probiotic bacteria whose action in the gut is boosted by prebiotic fiber, along with the vitamins and minerals it contains.",
    benefits: [
      "Regenerate and balance the intestinal flora, which is needed for proper absorption of nutrients.",
      "Keep your defense system active.",
    ],
    ingredients: "Probiotic cultures + Prebiotic fiber + Sweet granadilla pulp + Goldenberry",
    size: SACHETS_5G,
    flavor: ["Sweet granadilla"],
  },
  "liquid-fiber": {
    tagline: "Prebiotic nutrition for a regular digestive system!",
    description:
      "Soluble fiber and micronutrients that together nourish the intestinal flora and work synergistically within your body.",
    benefits: [
      "Helps normalize the frequency of bowel movements naturally.",
      "Improve the balance of the intestinal flora.",
      "Promote digestive health.",
    ],
    ingredients: "Prebiotic fiber + Vitamins + Minerals",
    size: SACHETS_5G,
    flavor: ["Lemon"],
  },
  "guindon-x": {
    tagline: "Free up transit in your digestive system!",
    description: "Herbal tea made with soluble fibers.",
    benefits: [
      "Feel lighter without the discomfort of abdominal bloating.",
      "Have healthy intestinal transit.",
      "Rid yourself of waste that is harmful to your body.",
    ],
    ingredients:
      "Fiber mix (psyllium, chicory inulin, flaxseed mucilage) + Prune extract + Kelp + Star anise",
    size: DOYPACK,
    flavor: ["Prune"],
  },
  "berry-balance": {
    tagline: "Protect your body and keep it in perfect balance!",
    description:
      "Delicious concentrate of antioxidants extracted from berries that help keep your urinary system healthy, naturally and more completely.",
    benefits: [
      "Avoid fluid retention.",
      "Promote pH balance of the flora that protects the urinary tract.",
    ],
    ingredients:
      "Cranberry + Concentrate of berries and tropical fruits + Pineapple infusion + Probiotic bacteria + Anthocyanin + Organic calcium + Vitamins C and E",
    size: SACHETS_5G,
    flavor: ["Cranberry pineapple"],
  },
  "alpha-balance": {
    tagline: "Keep your body balanced, clean and detoxified!",
    description:
      "Healthy drink with ingredients recognized as alkalizing that help promote the cleansing of toxic elements from your body so you can live healthy and with energy.",
    benefits: [
      "Keep your body balanced, clean and detoxified.",
      "Rid yourself of residues and toxins that are harmful to your body.",
      "Have more energy so your body works properly.",
    ],
    ingredients:
      "Alfalfa + Algae (chlorella + spirulina) + Wheatgrass (gluten-free) + Spinach + Green apple + Lemon + Ginger + Minerals (magnesium + zinc)",
    size: SACHETS_5G,
    flavor: ["Green apple"],
  },
  rexet: {
    tagline: "Prepare and reset your body!",
    description:
      "Effervescent drink with ingredients that help reactivate you while promoting a detox function and supporting proper liver function.",
    benefits: [
      "Keep the liver's metabolic functions optimal.",
      "Keep the body in balance, supporting the elimination of toxins.",
      "Promote the cleansing function from the digestive system.",
    ],
    ingredients:
      "Plant extract mix (red prickly pear, lemon verbena or lemongrass, chlorophyll, acerola, turmeric, parsley, artichoke), peptide and amino acid mix: hydrolyzed collagen, taurine, cysteine, collagen, vitamin and mineral mix: B complex (vit B1, B2, niacinamide, B6, B9 (folic acid), B12), magnesium, zinc",
    size: SACHETS_5G,
    flavor: ["Red prickly pear"],
  },
  "biopro-tect": {
    tagline: "Activate your natural protection system!",
    description:
      "Delicious instant shake made with the highest-quality protein: Bioprotein+ with Colostrum®, a formulation patented by FuXion® with 100% Biological Value. A complement to healthy daily nutrition that activates and strengthens the body's defense system.",
    benefits: [
      "Raise the quality and quantity of protein in your daily diet.",
      "Improve cell regeneration processes.",
      "Keep the body's defense system healthy.",
      "Strengthen bones.",
    ],
    ingredients: "Bioprotein+ with Colostrum® + Bioferrín® + Amino acids + Milk calcium + DHA and ARA",
    size: SACHETS_25G,
    flavor: ["Vanilla"],
  },
  "protein-active": {
    tagline: "Give your body advanced nutrition!",
    description:
      "100% plant-based active protein with high bioavailability and digestibility that perfectly complements your daily diet to maintain optimal health. Bioprotein Active® is a combination of active protein made from algae and sprouted plant proteins processed at low temperatures, which keeps the sprouts in full development and growth, making it a living food with active nutrients.",
    benefits: [
      "Optimal absorption of essential amino acids, so your body can regenerate its tissues in less time.",
      "Raise the quality and quantity of protein in your daily diet more effectively.",
      "Reduce the oxidative damage that affects your natural defense system and your mental performance.",
    ],
    ingredients:
      "Bioprotein Active® (sprouted quinoa, sprouted rice, pea and algae protein) + Amino acids + Vitamins + DHA and ARA + Coconut oil",
    size: SACHETS_25G,
    flavor: ["Vanilla cinnamon", "Chocolate hazelnut"],
  },
  "vita-xtra-t": {
    tagline: "Recover your vitality every day!",
    description:
      "Drink rich in antioxidants and energizers from fruit extracts. Its formula boosts the energizing effect of Green Tea and Acai Berry with Guayusa extract, a fruit of the Ecuadorian Amazon; the physical endurance provided by Cordyceps Mycelium and Maca is now reinforced with Goji Berry; and the antioxidant effect of purple corn anthocyanins with the vitamin C of lemon. A drink with a delicious purple corn refresher flavor!",
    benefits: [
      "Stay alert and in good spirits.",
      "Improve your physical performance and overall daily performance.",
      "Reduce cell oxidation and the proliferation of free radicals that can affect your metabolism and your immune system.",
    ],
    ingredients:
      "Guayusa + Green tea + Acai berry + Goji berry + Cordyceps mycelium + Maca + Ginseng + Purple corn anthocyanin",
    size: SACHETS_5G,
    flavor: ["Purple corn (chicha morada)"],
  },
  nutraday: {
    tagline: "Give your body the nutrients it needs!",
    description:
      "Delicious natural strawberry-flavored drink with the micronutrients you and your family need to help maintain vitality and strengthen your defenses. It is boosted with Moringa Extract [a natural source of iron and calcium]. This delicious mix is the ideal food to complement your family's nutrition, from your children to your grandparents.",
    benefits: [
      "Complement your nutrition with the right dose of antioxidants, vitamins and minerals.",
      "Keep your immune system in optimal condition.",
      "Have optimal physical and mental development.",
    ],
    ingredients:
      "Moringa extract + Guava + Lemon + Basil + Camu camu + Acai berry + Acerola + Sprouted quinoa (natural sources of antioxidants, 12 vitamins and 5 organic minerals)",
    size: SACHETS_5G,
    flavor: ["Natural strawberry"],
  },
  vera: {
    tagline: "Strengthen your body the smart way!",
    description:
      "Herbal blend with ingredients that help strengthen your immune system and keep it active.",
    benefits: [
      "Keep your natural defenses active.",
      "Reduce the oxidative damage that causes cell deterioration.",
    ],
    ingredients:
      "Aloe vera extract + Beta glucans + Amino acid mix (N-acetylcysteine + Glycine + L-glutamine) + Olive leaf extract + Amalaki (vitamin C)",
    size: SACHETS_5G,
    flavor: ["Mint"],
  },
  "ganomas-cappuccino": {
    tagline: "Optimize your protection system!",
    description:
      "Delicious cappuccino coffee made with Ganoderma Lucidum extract, a wild mushroom from Asia traditionally regarded as the secret of longevity for its great antioxidant power at the cellular level.",
    benefits: [
      "Reduce the oxidative damage that affects your natural protection system.",
      "Support the normal functioning of your natural defenses.",
    ],
    ingredients: "Ganoderma Lucidum extract + Quillay + Micronutrients",
    size: "28 sachets × 7.5 g",
    flavor: ["Cappuccino"],
  },
  "thermo-t3": {
    tagline: "Turn fat into energy!",
    description:
      "Delicious mix of three teas with lemon and plant extracts that promotes optimal metabolism, generating energy from fat stored in the body, which helps reduce measurements and lose weight (*), for a healthier body.",
    benefits: [
      "Reduce measurements by reducing fat buildup in the body (*).",
      "Increase your endurance, which is why it's recommended to take it before a workout.",
    ],
    ingredients:
      "Tea mix (green, black and red) + Raspberry ketones + Garcinia cambogia + L-carnitine + Green coffee + Alpha lipoic acid + Vitamin B6 + Chromium",
    size: DOYPACK,
    flavor: ["Lemon tea"],
    notes: [DIET],
  },
  "nocarb-t": {
    tagline: "Keep carbs in check!",
    description:
      "Delicious drink made with green tea and soluble chicory and apple fibers that help reduce carbohydrate absorption.",
    benefits: [
      "Control the carbohydrates in your diet.",
      "Reduce fat buildup in the body.",
    ],
    ingredients:
      "Soluble fibers (yacon fiber + Acacia fiber + Chicory inulin + Apple pectin) + Purslane + Cinnamon + Green tea + Chromium",
    size: DOYPACK,
    flavor: ["Apple cinnamon tea"],
  },
  "cafe-cafe-fit": {
    tagline: "Treat yourself without losing your figure!",
    description:
      "Irresistible roasted gourmet coffee. Enriched with green coffee extract, a unique formulation with chlorogenic acids associated with glucose and fat metabolism, supporting the control of measurements and body weight for a healthier body. Ideal to include in a low-calorie diet.",
    benefits: [
      "Reduce feelings of tiredness and fatigue.",
      "Reduce feelings of appetite.",
      "Support a weight and measurement control program (*).",
    ],
    ingredients: "Freeze-dried roasted coffee + Green coffee extract",
    size: SACHETS_5G,
    flavor: [],
    notes: [DIET],
  },
  "chocolate-fit": {
    tagline: "Stay in shape, deliciously!",
    description:
      "Chocolate Fit is a delicious drink made with dark chocolate from the Amazon, non-dairy creamer and spices. Enriched with chlorogenic acids from green coffee and CLA (Conjugated Linoleic Acid), ingredients that promote the reduction of measurements (*).",
    benefits: ["Reduce body measurements by speeding up fat metabolism (*)."],
    ingredients: "Pure Amazonian cacao + Plant protein + Green coffee + CLA + Organic chromium",
    size: "14 sachets × 15 g",
    flavor: [],
    notes: [DIET],
  },
  "biopro-fit": {
    tagline: "Improve your nutrition and reduce measurements!",
    description:
      "Delicious protein shake with Bioprotein Colostrum, a formula patented by FuXion, combining proteins of high biological value and high bioavailability with low calories. Enriched with Prolibra and nutrients that contribute to muscle nutrition at the cellular level, promoting proper muscle toning (*).",
    benefits: ["Maintain adequate cellular nutrition."],
    ingredients:
      "Bioprotein+ with Colostrum® + Prolibra® + Amino acids + Malabar tamarind + Vitamins + DHA and ARA",
    size: SACHETS_25G,
    flavor: ["Vanilla"],
    notes: ["(*) With a balanced diet and exercise."],
  },
  "protein-active-fit": {
    tagline: "Improve your nutrition and reduce measurements!",
    description:
      "100% plant-based active protein with high bioavailability, boosted with Malabar Tamarind, L-Carnitine, B-Complex Vitamins, and Chromium and Zinc in organic molecule form, which help keep your energy metabolism optimal and promote body fat reduction with its low-calorie, allergen-free formula of high biological value. Thanks to the combination of its sprouted ingredients, your body receives the intact nutrients each component offers.",
    benefits: [
      "Control your weight and reduce measurements while toning your muscles (*).",
      "Absorb essential amino acids optimally, so your body can achieve better muscle tone.",
      "Reduce feelings of appetite thanks to plant protein, which you absorb faster and more effectively.",
    ],
    ingredients:
      "Bioprotein Active® (sprouted quinoa, pea, sprouted rice and algae protein) + Essential amino acids + L-carnitine + Malabar tamarind + Vitamins + Calcium, chromium and zinc in organic molecule form",
    size: SACHETS_25G,
    flavor: ["Vanilla cinnamon", "Chocolate hazelnut"],
    notes: [DIET],
  },
  "10-14-active": {
    tagline: "Lose those extra pounds and gain health! (*)",
    description:
      "Comprehensive nutrition program that will help you adopt healthy eating and lifestyle habits while you lose extra pounds, tone your muscles and gain vitality (*).",
    benefits: [],
    ingredients:
      "4 Prunex1 + 28 Protein Active Fit vanilla & cinnamon + 14 Vita Xtra T+ + 14 Thermo T3 + 14 Nocarb-T",
    size: "Pack box",
    flavor: [],
    notes: [DIET],
  },
  probal: {
    tagline: "Protect your vital balance!",
    description:
      "Delicious herbal tea that combines amino acids, plant extracts, vitamins and minerals to support women's well-being.",
    benefits: ["Reinforce women's health.", "Maintain your balance during menopause."],
    ingredients:
      "Aguaje powder + Dong quai + Oregano + Black tea + L-tryptophan + Marigold + Camu-camu + Lemon + Magnesium + Calcium",
    size: SACHETS_5G,
    flavor: ["Oregano and lemon verbena"],
  },
  passion: {
    tagline: "Boost your vigor!",
    description:
      "Combination of amino acids, plant extracts and minerals in organic molecule form that improve your vigor and energy.",
    benefits: [
      "Improve vitality thanks to L-arginine, isoleucine and glutamine, powerful amino acids.",
      "Increase energy through its maca, ginseng and black tea theine content.",
      "Invigorate the body thanks to its royal jelly and organic zinc content.",
    ],
    ingredients: "Amino acids + Royal jelly extract + Maca + Ginseng + Organic zinc",
    size: SACHETS_5G,
    flavor: ["Guarana"],
  },
  "youth-elixir-hgh": {
    tagline: "Keep a young body for longer!",
    description:
      "Natural combination of amino acids and antioxidants such as resveratrol, extracted from wine grapes, and superfruits such as blueberries, elderberry and amalaki that work synergistically to reduce free radicals.",
    benefits: ["Increase vitality and skin elasticity, and improve sleep quality."],
    ingredients: "Amino acids + Antioxidants + Resveratrol + Optiberry®",
    size: SACHETS_5G,
    flavor: ["Wine grape"],
  },
  "golden-flx": {
    tagline: "Protect your body from within!",
    description:
      "Delicious spiced tea with coconut milk, made with certified organic turmeric extract with an antioxidant and protective effect. The curcuminoids extracted from turmeric work in synergy with ginger, cardamom and black pepper to maintain joint flexibility.",
    benefits: [
      "Help improve joint flexibility and mobility.",
      "Help control oxidative processes.",
    ],
    ingredients: "Cardamom + Coconut milk + Black pepper + Cinnamon",
    size: SACHETS_5G,
    flavor: ["Vanilla"],
  },
  "beauty-in": {
    tagline: "The secret of true beauty comes from within!",
    description:
      "Delicious nutritious guava drink with a potent combination of bioactive collagen peptides that nourish your skin from within, so it looks radiant and youthful for longer. BEAUTY-IN uses bioactive collagen peptides (four times more potent than conventional collagen), which stimulate skin cells to produce more collagen and elastin, working in synergy with the antioxidants and vitamins in its formula for rejuvenated skin.",
    benefits: [
      "Improve the structure of the dermis, for skin with greater elasticity that is firmer and more even.",
      "Strengthen hair and nails.",
    ],
    ingredients:
      "Optimized bioactive collagen peptides + Coenzyme Q10 + Sesbania (natural biotin) + Exotic superfruit concentrate (vitamins C and E) + Zinc",
    size: DOYPACK,
    flavor: ["Exotic superfruits"],
  },
  on: {
    tagline: "Active, alert mind!",
    description:
      "Delicious nutritious drink with ingredients that help activate your mind and keep it alert. ON is made from a combination of amino acids such as Taurine and GABA, with plant extracts such as Yerba Mate and Acai Berry that work in synergy with vitamins, minerals and essential fatty acids to support proper cognitive function.",
    benefits: [
      "Keep your mind active and alert.",
      "Nourish your brain and improve your neuronal function. (*)",
      "Reinforce your cognitive function.",
    ],
    ingredients:
      "GABA + Taurine + Yerba mate extract + Acai berry + Camu camu + Vitamin C + B-complex vitamins + Minerals in organic molecule form (magnesium, iron, zinc) + DHA + ARA",
    size: SACHETS_5G,
    flavor: ["Mixed fruit"],
    notes: [
      "(*) Vitamins B1, B2 and B6 contribute to the normal functioning of the nervous system, and vitamins B1 and B6 contribute to normal psychological function.",
    ],
  },
  off: {
    tagline: "Calm and focused!",
    description:
      "Delicious nutritious drink made with essential amino acids and fruit extracts known to help maintain a sense of balance under pressure and optimize natural cognitive processes, keeping you focused without causing drowsiness.",
    benefits: [
      "Maintain a sense of balance in the face of everyday stress.",
      "Maintain concentration and focus in moments of high tension.",
      "Improve your ability to relax.",
    ],
    ingredients:
      "Amino acids (L-theanine, glycine, tryptophan) + Superfruit extract (ashwagandha, amalaki and lemon) + Magnesium in organic molecule form + B-complex vitamins",
    size: SACHETS_5G,
    flavor: ["Peach tangerine"],
  },
  "pre-sport": {
    tagline: "Get your body ready to give it all!",
    description:
      "Natural isotonic, rehydrating and energizing drink that prepares the body for intense sports activity and improves performance during exercise.",
    benefits: [
      "Maintain body hydration thanks to its electrolytes.",
      "Increase endurance by promoting vasodilation (improves muscle nutrition and oxygenation).",
      "Reduce fatigue and improve athletic performance thanks to the extra energy it gives your body.",
    ],
    ingredients:
      "Amino acids (watermelon citrulline + beet β-alanine + L-creatine nitrate) + Isotonic mix (dextrose, potassium, sodium and zinc) + Yerba mate",
    size: SACHETS_5G,
    flavor: ["Watermelon"],
  },
  "xtra-mile": {
    tagline: "Energy to go the extra mile!",
    description:
      "Isotonic endurance drink made with Palatinose®, a low-glycemic-index carbohydrate obtained from beets, which provides balanced, sustained energy over time. In addition, its isotonic mix is made with Amazonian coconut water, 6 minerals (Potassium, Sodium, Calcium, Zinc, Chromium and Magnesium) and Maras Salt, making your hydration more efficient and helping you avoid fatigue.",
    benefits: ["Maintain energy in a sustained way.", "Reduce fatigue during exercise."],
    ingredients:
      "Palatinose® + Amazonian coconut water + Maras salt + Electrolyte mix (potassium, sodium, calcium and magnesium) + Minerals (zinc and chromium)",
    size: SACHETS_5G,
    flavor: ["Orange"],
  },
  "post-sport": {
    tagline: "Help your body recover after exercise!",
    description:
      "Sports drink made with amino acids, coconut water and antioxidants that help the body recover after exercise. Rich in branched-chain amino acids (BCAAs) that promote muscle recovery, growth and strengthening.",
    benefits: [
      "Repair, build and strengthen muscle fibers.",
      "Replenish electrolytes naturally, thanks to coconut water.",
      "Counter the catabolic effect of intense exercise, thanks to the antioxidants in pomegranate, acerola, rosemary and anthocyanins.",
    ],
    ingredients: "Amino acids (BCAAs + Glutamine) + Acerola + Pomegranate + Coconut water",
    size: SACHETS_5G,
    flavor: ["Pomegranate"],
  },
  "protein-active-sport": {
    tagline: "Healthy exercise and toned muscles!",
    description:
      "100% plant-based active protein that promotes cell regeneration and healthy muscle development by nourishing muscles with essential amino acids that stimulate muscle recovery after intense exercise. Its sprouted protein makes it a living food, helping you achieve the best results in less time.",
    benefits: [
      "Maintain the right protein profile for an athlete's diet.",
      "Improve recovery and oxygen supply to the muscle.",
      "Build lean, defined muscle mass in less time. (*)",
    ],
    ingredients:
      "Bioprotein Active® (pea, sprouted quinoa, sprouted rice and algae protein) + Essential amino acids + Vitamins + L-glutamine + BCAAs",
    size: SACHETS_25G,
    flavor: ["Vanilla cinnamon", "Chocolate hazelnut"],
    notes: [DIET],
  },
  "biopro-sport": {
    tagline: "Healthy exercise and toned muscles!",
    description:
      "Protein shake that helps nourish your muscles properly to avoid their deterioration and promote healthy body development, thanks to Bioprotein+ with Colostrum®, FuXion's patented protein formula, enriched with Actinos® and amino acids.",
    benefits: [
      "Increase blood flow and performance thanks to Actinos®, a patented peptide formulation.",
      "Build lean, defined muscle mass in less time. (*)",
      "Improve recovery and oxygen supply to the muscle.",
    ],
    ingredients: "Bioprotein+ with Colostrum® + Actinos® + Amino acids + Milk calcium + DHA and ARA",
    size: SACHETS_25G,
    flavor: ["Vanilla"],
    notes: [DIET],
  },
};
