export type ProcedureSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Procedure = {
  slug: string;
  name: string;
  shortName: string;
  category: "Prostate & BPH" | "Continence" | "Bladder Function" | "Reconstruction" | "Stone Disease" | "Diagnostics";
  tagline: string;
  summary: string;
  sections: ProcedureSection[];
  faqs: { question: string; answer: string }[];
  relatedCondition?: {
    label: string;
    to:
      | "/bph-holep"
      | "/male-urology"
      | "/female-urology"
      | "/voiding-dysfunction"
      | "/pelvic-reconstruction"
      | "/kidney-stones";
  };
};

const commonPrep: ProcedureSection = {
  heading: "What should I expect before surgery?",
  bullets: [
    "A pre-operative visit to review your history, medications, and goals.",
    "Instructions on blood thinners, supplements, and diabetes medications.",
    "A urine culture so any infection is treated before the procedure.",
    "Nothing to eat or drink after midnight unless told otherwise.",
    "A responsible adult to drive you home on the day of surgery.",
  ],
};

const commonCall: ProcedureSection = {
  heading: "When should I call the office?",
  bullets: [
    "Fever above 101.5°F or shaking chills.",
    "Inability to urinate, or a catheter that stops draining.",
    "Heavy bleeding, or clots that do not clear with increased fluids.",
    "Pain that is not controlled by your prescribed medication.",
    "Redness, swelling, or drainage at an incision site.",
  ],
};

export const procedures: Procedure[] = [
  {
    slug: "holep",
    name: "HoLEP (Holmium Laser Enucleation of the Prostate)",
    shortName: "HoLEP",
    category: "Prostate & BPH",
    tagline: "A durable, size-independent treatment for an enlarged prostate.",
    summary:
      "HoLEP uses a holmium laser to remove the obstructing inner tissue of the prostate through the urethra, with no external incisions and a very low chance of needing repeat surgery.",
    sections: [
      {
        heading: "What is HoLEP?",
        body: "HoLEP stands for holmium laser enucleation of the prostate. Working entirely through the urethra, the surgeon uses a laser to separate the obstructing inner portion of the prostate from its outer shell, much like removing the inside of an orange from its peel. The tissue is then removed and sent to pathology. Because the whole obstructing portion is removed rather than partially vaporized or trimmed, HoLEP works for prostates of any size and is considered a size-independent treatment.",
      },
      {
        heading: "Who may benefit from HoLEP?",
        bullets: [
          "Men with a weak stream, straining, frequent urination, or incomplete emptying.",
          "Men whose symptoms are not controlled by medication, or who prefer to stop medication.",
          "Men in urinary retention or dependent on a catheter.",
          "Men with very large prostates who would otherwise be offered open or robotic surgery.",
          "Men with bladder stones, recurrent infections, or bleeding related to the prostate.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "HoLEP is performed under general or spinal anesthesia. A telescope is passed through the urethra, the laser enucleates the obstructing tissue into the bladder, and a small instrument called a morcellator removes it. Most procedures take one to three hours depending on prostate size. Most patients stay overnight or go home the same day.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "Strong, durable improvement in urinary flow and emptying.",
          "One of the lowest retreatment rates of any BPH procedure.",
          "Effective for prostates of any size, including very large glands.",
          "Tissue is sent to pathology, so unsuspected prostate cancer can be identified.",
          "Can usually be performed safely for men on blood thinners.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Balanced counseling matters more than promoting one operation. Reasonable alternatives include watchful waiting, medication such as alpha blockers or 5-alpha reductase inhibitors, minimally invasive options such as UroLift, Rezum, or iTind, GreenLight photovaporization, TURP, and robotic simple prostatectomy. The right choice depends on prostate size, symptoms, anatomy, sexual function priorities, and your own preferences.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Temporary burning with urination and urinary urgency for several weeks.",
          "Temporary leakage while the bladder and sphincter adjust; long-term leakage is uncommon.",
          "Blood in the urine that can come and go for several weeks.",
          "Retrograde ejaculation in most men, meaning semen passes into the bladder.",
          "Urinary tract infection, urethral stricture, or bladder neck contracture in a small number of patients.",
        ],
      },
      commonPrep,
      {
        heading: "What happens on the day of surgery?",
        body: "You arrive a couple of hours before your scheduled time, meet the anesthesia team, and confirm the plan. After the procedure you wake up with a catheter that is flushing the bladder with sterile fluid to keep the urine clear. Most patients are up and walking the same day.",
      },
      {
        heading: "Will I have a catheter?",
        body: "Yes. Nearly all patients wake up with a catheter. It is typically removed the next morning or, less often, within a few days if the urine has not cleared. Most men leave with no catheter at all.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Urgency, frequency, and burning are normal for two to six weeks and then improve steadily.",
          "Some leakage is common at first and typically resolves with time and pelvic floor exercises.",
          "Drink plenty of water and avoid straining or heavy lifting for two to four weeks.",
          "Blood in the urine may reappear around the second or third week as scabs separate.",
        ],
      },
      {
        heading: "When can I return to work and exercise?",
        body: "Desk work is often possible within a week. Heavy lifting, cycling, and strenuous exercise generally wait two to four weeks. Your surgeon will personalize this to your job and your recovery.",
      },
      {
        heading: "What changes can occur with ejaculation?",
        body: "Most men experience retrograde ejaculation after HoLEP, meaning little or no semen is released during orgasm because it flows backward into the bladder. This is not harmful and does not usually change the sensation of orgasm, but it does affect fertility. Erections are not expected to change.",
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Is HoLEP better than TURP?",
        answer:
          "HoLEP removes more obstructing tissue and has a lower need for repeat surgery, especially in larger prostates. TURP remains an excellent option for smaller glands. The best procedure is the one matched to your anatomy and your goals.",
      },
      {
        question: "Do I need to stop my blood thinner?",
        answer:
          "Often no. HoLEP is one of the safer prostate procedures for men who must remain on anticoagulation. Any change is coordinated with the prescribing physician.",
      },
      {
        question: "Will HoLEP affect my erections?",
        answer:
          "HoLEP is not expected to change erectile function. Ejaculation usually becomes retrograde.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Because the obstructing tissue is removed rather than partially treated, results are durable and retreatment is uncommon over the long term.",
      },
    ],
    relatedCondition: { label: "Enlarged Prostate & BPH", to: "/bph-holep" },
  },
  {
    slug: "artificial-urinary-sphincter",
    name: "Artificial Urinary Sphincter (AUS)",
    shortName: "Artificial Urinary Sphincter",
    category: "Continence",
    tagline: "The reference standard for moderate to severe male stress incontinence.",
    summary:
      "An artificial urinary sphincter is an implanted device that restores control after prostate surgery or radiation, allowing you to urinate on your own schedule by pressing a small pump.",
    sections: [
      {
        heading: "What is an artificial urinary sphincter?",
        body: "The AUS is a three-part implanted device: a soft cuff placed around the urethra, a pressure-regulating balloon in the lower abdomen, and a small control pump placed in the scrotum. The cuff normally keeps the urethra closed. When you want to urinate, you squeeze the pump a few times, the cuff opens for a couple of minutes, and then it refills on its own.",
      },
      {
        heading: "Who may benefit from an AUS?",
        bullets: [
          "Men with moderate to severe leakage after radical prostatectomy.",
          "Men with leakage after radiation, TURP, or HoLEP that has not improved with therapy.",
          "Men whose sling has failed or who leak too much for a sling to work well.",
          "Men with the hand strength and cognitive ability to operate the pump.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Through a small perineal incision and a lower abdominal incision, the cuff is placed around the urethra, the balloon is positioned behind the pubic bone, and the pump is placed in the scrotum. The operation usually takes one to two hours and is often same-day or one overnight stay.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "The most reliable long-term treatment for significant male stress incontinence.",
          "Most men go from multiple pads a day to no pads or one security pad.",
          "Works for leakage of many different severities, including after radiation.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Pelvic floor physical therapy, lifestyle and fluid management, condom or absorbent products, urethral bulking, and a male sling. A sling is generally best for mild to moderate leakage without prior radiation; the AUS is preferred for heavier leakage.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Infection of the device, which may require removal.",
          "Erosion of the cuff through the urethra, more likely after radiation.",
          "Mechanical failure over time; most devices eventually need revision.",
          "Persistent or recurrent leakage requiring adjustment.",
          "Difficulty urinating or scrotal discomfort in the early weeks.",
        ],
      },
      commonPrep,
      {
        heading: "What happens on the day of surgery?",
        body: "You are given antibiotics before the incision, the surgery is performed under general anesthesia, and you go home the same day or the next morning with the device deactivated.",
      },
      {
        heading: "Will I have a catheter?",
        body: "A catheter is usually placed during surgery and removed before you go home or the next morning.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "The device stays deactivated for about six weeks so tissues can heal, so you will keep leaking during that time.",
          "Scrotal swelling and bruising are expected and settle over two to three weeks.",
          "No heavy lifting, cycling, or straddling activity for six weeks.",
          "At the activation visit you are taught to use the pump.",
        ],
      },
      {
        heading: "When can I return to work and exercise?",
        body: "Desk work in one to two weeks. Full activity and exercise after activation at around six weeks.",
      },
      commonCall,
    ],
    faqs: [
      {
        question: "How long does the device last?",
        answer:
          "Many devices function well for seven to ten years or more. Mechanical parts can wear out, and revision surgery is straightforward when it becomes necessary.",
      },
      {
        question: "Will anyone be able to see it?",
        answer: "No. The entire device is under the skin. Only the pump can be felt in the scrotum.",
      },
      {
        question: "Can I have an MRI?",
        answer: "Yes. Current devices are MRI compatible. Always tell your care team you have an implant.",
      },
    ],
    relatedCondition: { label: "Male Urology & Continence", to: "/male-urology" },
  },
  {
    slug: "male-sling",
    name: "Male Sling",
    shortName: "Male Sling",
    category: "Continence",
    tagline: "A pump-free option for mild to moderate leakage after prostate surgery.",
    summary:
      "A male sling repositions and supports the urethra to restore continence without any device for you to operate.",
    sections: [
      {
        heading: "What is a male sling?",
        body: "A soft synthetic sling is placed through a small incision between the scrotum and rectum. It supports and gently repositions the urethra so that it resists leakage during coughing, lifting, and activity. Nothing needs to be pressed or activated afterward.",
      },
      {
        heading: "Who may benefit from a male sling?",
        bullets: [
          "Men using roughly one to three pads a day after prostate surgery.",
          "Men who have completed pelvic floor therapy without full improvement.",
          "Men who prefer not to operate a device.",
          "Generally not the best choice after pelvic radiation or for very heavy leakage.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Under general anesthesia through one small perineal incision, the sling is positioned and tensioned. The operation typically takes under an hour and is done as a same-day procedure.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "No device to operate and nothing visible or palpable in the scrotum.",
          "Short procedure and quick recovery.",
          "High satisfaction in appropriately selected patients.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Pelvic floor physical therapy, urethral bulking agents, an artificial urinary sphincter, or continuing with absorbent products.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Persistent leakage if the leakage was heavier than the sling can correct.",
          "Temporary difficulty urinating or urinary retention.",
          "Perineal pain or numbness, usually temporary.",
          "Infection or, rarely, erosion requiring sling removal.",
        ],
      },
      commonPrep,
      {
        heading: "What happens on the day of surgery?",
        body: "The procedure is performed under general anesthesia. Most men go home the same day after demonstrating they can urinate.",
      },
      {
        heading: "Will I have a catheter?",
        body: "A catheter is used during surgery and usually removed before discharge. Occasionally it stays in overnight.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Perineal soreness for one to three weeks.",
          "No heavy lifting, cycling, or straining for six weeks so the sling settles.",
          "Continence improvement is usually immediate and continues over several weeks.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Is a sling as effective as an artificial sphincter?",
        answer:
          "For mild to moderate leakage, results are comparable and the sling is simpler. For heavy leakage or after radiation, an artificial urinary sphincter is more reliable.",
      },
      {
        question: "Can I still have an AUS later?",
        answer: "Yes. A sling does not prevent placing an artificial urinary sphincter in the future.",
      },
    ],
    relatedCondition: { label: "Male Urology & Continence", to: "/male-urology" },
  },
  {
    slug: "midurethral-sling",
    name: "Midurethral Sling (Female)",
    shortName: "Female Sling",
    category: "Continence",
    tagline: "A short outpatient procedure for stress urinary incontinence in women.",
    summary:
      "A narrow strip of mesh or your own tissue supports the midurethra so leakage does not occur with coughing, sneezing, laughing, or exercise.",
    sections: [
      {
        heading: "What is a midurethral sling?",
        body: "A thin supportive strip is placed under the middle of the urethra through a small vaginal incision. When abdominal pressure rises, the sling provides a backboard that keeps the urethra closed. Slings can be made from synthetic mesh or from your own fascia when preferred or when mesh is not appropriate.",
      },
      {
        heading: "Who may benefit from a sling?",
        bullets: [
          "Women who leak with coughing, sneezing, laughing, lifting, or exercise.",
          "Women who have tried pelvic floor therapy without adequate improvement.",
          "Women having prolapse repair who also have stress leakage.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Under general or regional anesthesia, a small vaginal incision and two tiny exit sites are used to position and tension the sling. The procedure takes about 30 minutes and is performed as an outpatient.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "High long-term cure and improvement rates for stress incontinence.",
          "Quick outpatient procedure with a small incision.",
          "Immediate improvement for most women.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Pelvic floor physical therapy, a pessary or continence device, urethral bulking injection, and autologous fascial sling. Some women with mixed symptoms benefit more from bladder-directed therapy first.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Difficulty emptying the bladder, usually temporary.",
          "New or worsened urgency.",
          "Urinary tract infection.",
          "Mesh exposure or pain in a small number of patients, which can require revision.",
          "Recurrent or persistent leakage.",
        ],
      },
      commonPrep,
      {
        heading: "What happens on the day of surgery?",
        body: "You go home the same day, usually after demonstrating you can empty your bladder.",
      },
      {
        heading: "Will I have a catheter?",
        body: "Usually not. A catheter is used during surgery and removed before you go home. A small number of women go home briefly with a catheter or are taught intermittent catheterization for a few days.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Light spotting and mild discomfort for one to two weeks.",
          "No lifting over ten pounds, intercourse, or tampons for six weeks.",
          "Most women return to desk work within a week.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Is mesh safe?",
        answer:
          "The midurethral sling is one of the most studied procedures in urology and has strong long-term safety data. Complications are uncommon but real, which is why counseling, correct placement, and access to a reconstructive surgeon matter.",
      },
      {
        question: "Can I have a sling without mesh?",
        answer:
          "Yes. An autologous fascial sling using your own tissue is an excellent alternative and is offered when preferred or clinically indicated.",
      },
    ],
    relatedCondition: { label: "Female Urology & Mesh", to: "/female-urology" },
  },
  {
    slug: "bladder-botox",
    name: "Bladder Botox (Onabotulinumtoxin A Injection)",
    shortName: "Bladder Botox",
    category: "Bladder Function",
    tagline: "An office treatment for urgency and urgency incontinence that medication has not controlled.",
    summary:
      "Botox is injected into the bladder muscle to calm involuntary contractions, reducing urgency, frequency, and urgency leakage for roughly six to nine months at a time.",
    sections: [
      {
        heading: "What is bladder Botox?",
        body: "Small amounts of onabotulinumtoxin A are injected into the bladder wall through a cystoscope. The medication relaxes the overactive bladder muscle so it stops contracting without warning.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Adults with overactive bladder not controlled by behavioral therapy and medication.",
          "Patients who cannot tolerate the side effects of OAB medications.",
          "Patients with neurogenic bladder from multiple sclerosis, spinal cord injury, or Parkinson disease.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Most treatments are done in the office in about ten minutes using numbing gel instilled into the bladder. A thin flexible cystoscope is passed through the urethra and the medication is delivered in roughly 20 small injections. Some patients prefer sedation.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "Meaningful reduction in urgency episodes and leakage for most patients.",
          "No daily pill and no systemic anticholinergic side effects.",
          "Reversible, since the effect wears off.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Bladder training and fluid management, pelvic floor physical therapy, oral medications including beta-3 agonists and antimuscarinics, tibial nerve stimulation, and sacral neuromodulation.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Urinary tract infection.",
          "Temporary difficulty emptying the bladder; a small percentage of patients need to catheterize for a period of time.",
          "Blood in the urine for a day or two.",
          "Loss of effect over months, requiring repeat treatment.",
        ],
      },
      {
        heading: "What should I expect before the procedure?",
        bullets: [
          "A urine test to confirm there is no infection.",
          "An antibiotic before the injection.",
          "Willingness and ability to perform self-catheterization if retention occurs.",
        ],
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Mild burning and pink urine for one to two days.",
          "Improvement begins within one to two weeks and peaks by about six weeks.",
          "A follow-up check of bladder emptying is arranged after treatment.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "How often do I need it repeated?",
        answer: "Most patients repeat treatment every six to nine months, guided by symptoms rather than the calendar.",
      },
      {
        question: "Will I need a catheter?",
        answer:
          "Most patients do not. A minority develop incomplete emptying and catheterize temporarily until the effect softens.",
      },
    ],
    relatedCondition: { label: "Overactive Bladder & Voiding Dysfunction", to: "/voiding-dysfunction" },
  },
  {
    slug: "sacral-neuromodulation",
    name: "Sacral Neuromodulation",
    shortName: "Sacral Neuromodulation",
    category: "Bladder Function",
    tagline: "A pacemaker-like therapy that retunes the nerve signals between the bladder and the brain.",
    summary:
      "A small implanted device gently stimulates the sacral nerve to treat urgency, urgency incontinence, non-obstructive urinary retention, and some bowel symptoms, and you test it before committing.",
    sections: [
      {
        heading: "What is sacral neuromodulation?",
        body: "A thin lead is placed near the third sacral nerve root and connected to a small generator implanted under the skin of the upper buttock. Mild electrical pulses normalize communication between the bladder, the pelvic floor, and the brain.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Patients with overactive bladder unresponsive to medication.",
          "Patients with non-obstructive urinary retention or incomplete emptying.",
          "Patients who prefer not to have repeat Botox injections.",
          "Patients with coexisting fecal incontinence.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Therapy is staged. First a test phase places the lead and connects it to an external generator for one to two weeks so you can measure the benefit in daily life. If your symptoms improve substantially, a second short procedure implants the permanent generator.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "You try the therapy before committing to a permanent implant.",
          "Treats both urgency symptoms and retention.",
          "Adjustable and fully reversible.",
          "Current devices are rechargeable, MRI conditional, and long-lasting.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Behavioral therapy, medications, bladder Botox, tibial nerve stimulation, and intermittent catheterization for retention.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Pain or discomfort at the implant site.",
          "Infection, which may require device removal.",
          "Lead migration or loss of effect requiring reprogramming or revision.",
          "Unpleasant stimulation sensation, usually corrected with programming.",
        ],
      },
      commonPrep,
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "You keep a bladder diary during the test phase to measure real improvement.",
          "Avoid bending, twisting, and lifting for several weeks after implant.",
          "Programming is fine-tuned at follow-up visits.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "How do I know if it will work for me?",
        answer:
          "That is the purpose of the test phase. Permanent implantation is offered only if you experience a substantial, measurable improvement.",
      },
      {
        question: "Can I have an MRI?",
        answer: "Current systems are MRI conditional. Always tell imaging staff about your device.",
      },
    ],
    relatedCondition: { label: "Overactive Bladder & Voiding Dysfunction", to: "/voiding-dysfunction" },
  },
  {
    slug: "urodynamics",
    name: "Urodynamic Testing",
    shortName: "Urodynamics",
    category: "Diagnostics",
    tagline: "The test that explains why the bladder is behaving the way it is.",
    summary:
      "Urodynamics measures how the bladder fills, stores, and empties so that treatment is chosen based on function rather than assumption.",
    sections: [
      {
        heading: "What is urodynamic testing?",
        body: "Urodynamics is an office study that measures bladder pressure, urine flow, and sphincter activity while the bladder is slowly filled and then emptied. It reproduces your symptoms under measurement so the underlying mechanism can be identified: an overactive bladder muscle, a weak sphincter, obstruction, poor bladder emptying, or a combination.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Patients considering incontinence or prostate surgery.",
          "Patients with mixed or confusing symptoms.",
          "Patients whose prior treatment did not work as expected.",
          "Patients with neurologic conditions affecting the bladder.",
        ],
      },
      {
        heading: "How is the test performed?",
        body: "Two very small catheters are placed, one in the bladder and one in the rectum or vagina, and sensor pads are applied. The bladder is filled slowly with sterile fluid while you report sensations, then you urinate into a special measuring chair. The visit takes about 45 to 60 minutes.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "Objective information that prevents unnecessary or mismatched surgery.",
          "Explains symptoms that have not responded to standard treatment.",
          "Guides which continence or BPH procedure fits your anatomy and function.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "A bladder diary, uroflow with a post-void residual measurement, cystoscopy, and imaging give partial information and are sometimes sufficient for straightforward cases.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Mild burning with urination for a day.",
          "Urinary tract infection in a small number of patients.",
          "Temporary blood-tinged urine.",
        ],
      },
      {
        heading: "How should I prepare?",
        bullets: [
          "Arrive with a comfortably full bladder unless told otherwise.",
          "Continue your usual medications unless instructed to hold bladder medications.",
          "Bring a completed bladder diary if one was provided.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Is urodynamics painful?",
        answer: "Most patients describe it as uncomfortable rather than painful. Catheter placement takes only a few seconds.",
      },
      {
        question: "When do I get results?",
        answer:
          "Results are usually reviewed with you at a follow-up visit, where the findings are translated directly into a treatment plan.",
      },
    ],
    relatedCondition: { label: "Overactive Bladder & Voiding Dysfunction", to: "/voiding-dysfunction" },
  },
  {
    slug: "urethroplasty",
    name: "Urethroplasty (Urethral Reconstruction)",
    shortName: "Urethroplasty",
    category: "Reconstruction",
    tagline: "Definitive repair of urethral stricture rather than repeated dilation.",
    summary:
      "Urethroplasty reconstructs the narrowed segment of the urethra, often using a graft of tissue from inside the cheek, with far higher long-term success than repeat dilation or incision.",
    sections: [
      {
        heading: "What is urethroplasty?",
        body: "A urethral stricture is scar tissue that narrows the urethra and blocks urine flow. Urethroplasty is open reconstruction of that segment. Short strictures may be excised and the healthy ends rejoined. Longer strictures are widened using a graft, most often buccal mucosa taken from the inside of the cheek, which heals quickly and is well suited to a wet environment.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Men with recurrent stricture after dilation or internal urethrotomy.",
          "Men with long or dense strictures.",
          "Men with strictures after trauma, catheterization, infection, or prior surgery.",
          "Men who want a durable solution rather than repeated procedures.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Under general anesthesia through a perineal or penile incision, the strictured segment is exposed and either removed and reconnected or opened and patched with a graft. The operation typically takes two to four hours. Most patients go home the same day or after one night.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "Long-term success rates that are substantially higher than repeat dilation.",
          "Ends the cycle of repeated procedures and catheters.",
          "Restores normal flow and bladder emptying.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Urethral dilation, internal urethrotomy, self-catheterization to maintain patency, or a permanent suprapubic catheter. These are less invasive but far more likely to require repeat treatment.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Stricture recurrence, which is uncommon but possible.",
          "Wound infection or hematoma.",
          "Temporary numbness, cheek tightness, or altered sensation at the graft site.",
          "Changes in ejaculation, spraying of the stream, or penile curvature in some reconstructions.",
          "Erectile changes, usually temporary.",
        ],
      },
      commonPrep,
      {
        heading: "Will I have a catheter?",
        body: "Yes. A catheter stays in place for roughly two to three weeks. Before it is removed, an x-ray study is performed to confirm the repair has healed and is watertight.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Perineal soreness and bruising for two to three weeks.",
          "Sit on a cushion and avoid straddling activities.",
          "No lifting, cycling, or sexual activity for four to six weeks.",
          "If a cheek graft was used, expect a soft diet and mouth soreness for several days.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Why not just dilate it again?",
        answer:
          "Dilation and urethrotomy stretch or cut the scar but do not remove it, so recurrence is common. Reconstruction addresses the scar itself.",
      },
      {
        question: "Does taking a cheek graft change my face or speech?",
        answer: "No. The donor site heals within a couple of weeks and does not change appearance or speech.",
      },
    ],
    relatedCondition: { label: "Urethral & Pelvic Reconstruction", to: "/pelvic-reconstruction" },
  },
  {
    slug: "ureteroscopy",
    name: "Ureteroscopy with Laser Lithotripsy",
    shortName: "Ureteroscopy",
    category: "Stone Disease",
    tagline: "Scope-based stone removal with no incisions.",
    summary:
      "A small scope is passed up to the stone and a laser breaks it into fragments that are removed or passed, treating stones in the ureter and kidney.",
    sections: [
      {
        heading: "What is ureteroscopy?",
        body: "A thin scope is passed through the urethra and bladder up the ureter to the stone. A laser fiber fragments the stone and a basket removes the pieces. No incisions are made.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Patients with stones in the ureter causing pain or obstruction.",
          "Patients with kidney stones that are too large to pass or have failed to pass.",
          "Patients on blood thinners, in whom shock wave therapy may be unsafe.",
          "Patients who need a definitive answer in one procedure.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Under general anesthesia, usually taking 30 to 90 minutes. A temporary stent is often placed afterward to keep the ureter open while swelling settles. Most patients go home the same day.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "High stone-free rates in a single procedure.",
          "No incisions and rapid return to activity.",
          "Stone fragments can be analyzed to guide prevention.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Observation with medical expulsive therapy for small stones, shock wave lithotripsy, or percutaneous nephrolithotomy for large stone volumes.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Stent discomfort, urgency, and blood in the urine while the stent is in.",
          "Urinary tract infection.",
          "Ureteral injury or narrowing, which is uncommon.",
          "Residual fragments requiring a second procedure.",
        ],
      },
      commonPrep,
      {
        heading: "Will I have a stent?",
        body: "Often yes. Stents are typically removed in the office within three to ten days, sometimes by a string left in place that you or the office can remove.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Burning, urgency, and pink urine for several days, especially with a stent.",
          "Flank discomfort while urinating is normal with a stent in place.",
          "Most patients return to work within a few days.",
          "Increase fluids and collect fragments for analysis if instructed.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "Does stent removal hurt?",
        answer: "It takes a few seconds and most patients describe brief discomfort rather than pain.",
      },
      {
        question: "Will my stones come back?",
        answer:
          "Recurrence is common without prevention. Stone analysis, metabolic testing, and dietary changes substantially reduce risk.",
      },
    ],
    relatedCondition: { label: "Kidney Stones", to: "/kidney-stones" },
  },
  {
    slug: "pcnl",
    name: "Percutaneous Nephrolithotomy (PCNL)",
    shortName: "PCNL",
    category: "Stone Disease",
    tagline: "The most effective treatment for large and complex kidney stones.",
    summary:
      "Through a small tract in the flank, large stones are fragmented and removed directly from the kidney in a single procedure.",
    sections: [
      {
        heading: "What is PCNL?",
        body: "PCNL treats large kidney stones through a tract roughly a centimeter wide created in the back. A scope is passed directly into the kidney, and the stone is broken up and removed. Mini-PCNL uses an even smaller tract for selected stones, and supine positioning is used when it suits the anatomy.",
      },
      {
        heading: "Who may benefit?",
        bullets: [
          "Patients with kidney stones larger than roughly two centimeters.",
          "Patients with staghorn or branched stones.",
          "Patients with hard stones that resist laser or shock wave treatment.",
          "Patients with anatomy that makes scope-based access difficult.",
        ],
      },
      {
        heading: "How is the procedure performed?",
        body: "Under general anesthesia, imaging guides needle access into the correct part of the kidney, the tract is dilated, and the stone is fragmented and removed. Most patients stay one night. A nephrostomy tube or stent may be left temporarily.",
      },
      {
        heading: "What are the benefits?",
        bullets: [
          "The highest stone-free rate of any treatment for large stones.",
          "Often clears in one procedure what would take several ureteroscopies.",
          "Improves kidney function outcomes in obstructing stone disease.",
        ],
      },
      {
        heading: "What are the alternatives?",
        body: "Staged ureteroscopy, shock wave lithotripsy for selected stones, or observation for asymptomatic non-obstructing stones.",
      },
      {
        heading: "What are the risks?",
        bullets: [
          "Bleeding, which occasionally requires transfusion or an embolization procedure.",
          "Infection or sepsis, which is why pre-operative urine cultures matter.",
          "Injury to adjacent structures, which is uncommon.",
          "Residual fragments requiring a secondary procedure.",
        ],
      },
      commonPrep,
      {
        heading: "Will I have a tube?",
        body: "You may wake with a nephrostomy tube in the flank, a ureteral stent, or both. They are removed within days depending on how the procedure went.",
      },
      {
        heading: "What should I expect during recovery?",
        bullets: [
          "Flank soreness for one to two weeks.",
          "Blood-tinged urine for several days.",
          "No heavy lifting for two weeks.",
          "Follow-up imaging to confirm clearance, plus stone analysis and prevention planning.",
        ],
      },
      commonCall,
    ],
    faqs: [
      {
        question: "How long is the hospital stay?",
        answer: "Most patients stay one night. Selected patients with small tracts can go home the same day.",
      },
      {
        question: "Will one procedure clear everything?",
        answer:
          "Usually yes. Very large or branched stones sometimes need a planned second look to achieve a stone-free result.",
      },
    ],
    relatedCondition: { label: "Kidney Stones", to: "/kidney-stones" },
  },
];

export const getProcedure = (slug: string) => procedures.find((p) => p.slug === slug);
