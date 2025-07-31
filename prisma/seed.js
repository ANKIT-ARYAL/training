import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.course.deleteMany();
    await prisma.course.createMany({
        data: [
  {
    title: "Advanced AC Repair & Maintenance",
    description: "Master the complete servicing of residential and commercial AC units, covering gas charging, compressor troubleshooting, and PCB diagnostics.",
    thumbnail: "ac1.png",
    duration: "3 months",
    category: "ac",
    
  },
  {
    title: "Split & Window AC Installation Technician",
    description: "Focused course on installing, uninstalling, and maintaining split and window-type ACs. Includes pipe fittings, vacuuming, and leakage testing.",
    thumbnail: "ac2.png",
    duration: "1.5 months",
    category: "ac",
  },
  {
    title: "Commercial HVAC System Repair",
    description: "Train to handle large-scale HVAC systems used in offices and malls. Covers air handling units, duct maintenance, thermostats, and safety checks.",
    thumbnail: "ac3.png",
    duration: "4 months",
    category: "ac",
  },
  
  {
    title: "Refrigerator Repair & Servicing Program",
    description: "Learn repair of single/double-door and inverter refrigerators, including compressor faults, cooling issues, and electronic controls.",
    thumbnail: "fridge1.png",
    duration: "2.5 months",
    category: "fridge",
  },
  {
    title: "Compressor Overhaul & Gas Charging",
    description: "In-depth training on disassembling, servicing, and reassembling fridge compressors, with hands-on gas charging and leak detection.",
    thumbnail: "fridge2.png",
    duration: "1.5 months",
    category: "fridge",
  },
  {
    title: "Smart Fridge Diagnostics & PCB Repair",
    description: "Work with modern refrigerators featuring digital panels and smart sensors. This course teaches circuit analysis and PCB fault fixing.",
    thumbnail: "fridge3.png",
    duration: "3 months",
    category: "fridge",
  },
  {
    title: "Washing Machine Repair Technician Course",
    description: "Covers repair of semi and fully automatic washing machines including motor, inlet valve, drainage, and error code resolution.",
    thumbnail: "wm1.png",
    duration: "2 months",
    category: "washing-machine",
  },
  {
    title: "Top Load & Front Load Machine Servicing",
    description: "Specialized training on structural differences, drum alignment, sensor calibration, and water control modules for various machine types.",
    thumbnail: "wm2.png",
    duration: "2.5 months",
    category: "washing-machine",
  },
  {
    title: "Electronic Control Board Repair",
    description: "Learn to diagnose and repair PCBs used in washing machines using multimeters, soldering, and IC replacement techniques.",
    thumbnail: "wm3.png",
    duration: "3 months",
    category: "washing-machine",
  },
]
    });

    await prisma.blog.deleteMany();

    await prisma.blog.createMany({
      
    data:[
  {
   
    title: 'How to Maintain Your Air Conditioner for Peak Performance',
    content:
      'Learn essential tips and tricks to keep your AC running efficiently all summer long.',
    date: new Date('2025-07-25'),
    coverImage: 'AC-repair.png',
    category: 'AC Repair',
  },
  {
    
    title: 'Troubleshooting Common Washing Machine Issues',
    content:
      'A step-by-step guide to diagnosing and fixing frequent washing machine problems yourself.',
    date: new Date('2025-07-20'),
    coverImage: 'Common_Washing_Machine_Problems.png',
    category: 'Washing Machine',
  },
  {
    
    title: 'Choosing the Right Refrigerator for Your Home',
    content:
      'Key factors to consider when buying a refrigerator to suit your needs and budget.',
    date: new Date('2025-07-15'),
    coverImage: 'Choosing-the-right-fridge.png',
    category: 'Refrigerators',
  },
  {
    
    title: 'Why Regular Appliance Maintenance Saves You Money',
    content:
      'Discover how timely servicing can extend the lifespan of your home appliances.',
    date: new Date('2025-07-10'),
    coverImage: 'preventativeappliance.png',
    category: 'General Tips',
  },
]
    })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async() => {
    await prisma.$disconnect();
  });