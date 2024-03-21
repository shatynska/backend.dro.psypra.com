export async function seedDimensionItems(prisma) {
  const psychologist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychologist' },
    update: {},
    create: {
      alias: 'psychologist',
      title: 'психолог',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        "Це фахівець, який оцінює, діагно­стує і вивчає пове­дінку і розу­мові процеси. Деякі пси­хологи, такі як клі­нічні та психо­логи-консуль­танти, піклу­ються про пси­хічне здоров'я, соці­альні або орга­нізаційні психо­логи прово­дять дослі­дження та нада­ють психо­логічну допо­могу. <p>Пси­холог — не лікар, відпо­відно не ста­вить медич­них діаг­нозів, не лікує і не призначає лікарських препаратів. Психолог працює з психічно здоровими людьми, що мають якісь труднощі або потрапили в складну життєву ситуацію.<p>Переважно, до психолога звертаються в таких випадках як: травматичні та стресові ситуації: смерть, розлучення, насильство, тяжке захворювання, тощо. А також вагітність, народження дитини, переїзд на нове місце проживання, перехід на нову роботу й інше; коли людина відчуває різні труднощі та проблеми в ситуаціях спілкування та взаємодії з іншими людьми (близькими, дітьми, колегами.); коли є якісь тілесні симптоми або психосоматичні захворювання (наприклад, нейродерміт, вегетосудинна дистонія, синдром хронічної втоми та інші); коли людина відчуває, що «щось не так» з нею або з її оточенням і у неї є бажання поліпшити своє життя; а також будь-які інші причини, що вимагають підтримки або допомоги зовні.",
    },
    include: {
      dimension: true,
    },
  });

  const psychotherapist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychotherapist' },
    update: {},
    create: {
      alias: 'psychotherapist',
      title: 'психотерапевт',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        "Психотерапевт – це фахівець у царині ментального здоров'я, який отримав додаткову освіту за одним із напрямків психотерапії (психоаналіз, гештальт, психодрама, системна сімейна, клієнт-центрована, тощо). Щоби здобувати освіту психотерапевта, потрібно мати диплом психолога, лікаря, соціального працівника або педагога. <p>Психотерапія - це немедикаментозний вплив, основними чинниками якого є слово, мовлення, а також мова тіла (міміка, жести, дії), зосередження на емоціях і їх вираженні. Мета усіх видів психотерапії – дати людині можливість задовольнити її природні потреби у любові, прийнятті, почутті контролю, особистісному зростанні, самореалізації. Психотерапія допомагає усунути або зменшити психологічні (тривога, страх, панічні атаки, фобії, залежності) та психосоматичні (тілесні, які викликані емоціями) симптоми, душевні страждання. А також це допомога у зміні стосунків, почуттів і поведінки, які заважають адаптації. Психотерапія допомагає клієнту зрозуміти себе і інших, покращити соціальну взаємодію, зменшити силу негативного стресу, пережити втрату, яка також є невід'ємною складовою життя. Усі напрямки психотерапії вважаються рівноцінними за ефективністю. Вони прямують до однієї мети – задоволення запиту клієнта, але рухаються різними шляхами, використовуючи різні інструменти і методи. Оберіть той напрямок, який вам більше до душі.",
    },
    include: {
      dimension: true,
    },
  });

  const psychiatrist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychiatrist' },
    update: {},
    create: {
      alias: 'psychiatrist',
      title: 'психіатр',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        'Це лікар, що спе­ціалі­зується на психі­атрії, галузі меди­цини, що вивчає при­чини вини­кнення, про­яви, пере­біг, методи запо­бігання і ліку­вання пси­хічних розладів. Засто­совує сучасні мето­ди профі­лактики, діагно­стики, ліку­вання, реабі­літації та диспан­сери­зації хворих пси­хіатрич­ного профілю, надає їм шви­дку та невід­кладну меди­чну допо­могу. Здій­снює нагляд за побічними реакціями/діями лікарських засобів.',
    },
    include: {
      dimension: true,
    },
  });

  const individual = await prisma.dimensionItem.upsert({
    where: { alias: 'individual' },
    update: {},
    create: {
      alias: 'individual',
      title: 'індивідуальна',
      dimension: {
        connect: { alias: 'forms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const сouples = await prisma.dimensionItem.upsert({
    where: { alias: 'сouples' },
    update: {},
    create: {
      alias: 'сouples',
      title: 'парна',
      dimension: {
        connect: { alias: 'forms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const family = await prisma.dimensionItem.upsert({
    where: { alias: 'family' },
    update: {},
    create: {
      alias: 'family',
      title: 'сімейна',
      dimension: {
        connect: { alias: 'forms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const group = await prisma.dimensionItem.upsert({
    where: { alias: 'group' },
    update: {},
    create: {
      alias: 'group',
      title: 'групова',
      dimension: {
        connect: { alias: 'forms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const preschool = await prisma.dimensionItem.upsert({
    where: { alias: 'preschool' },
    update: {},
    create: {
      alias: 'preschool',
      title: '3+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const school = await prisma.dimensionItem.upsert({
    where: { alias: 'school' },
    update: {},
    create: {
      alias: 'school',
      title: '6+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const adolescent = await prisma.dimensionItem.upsert({
    where: { alias: 'adolescent' },
    update: {},
    create: {
      alias: 'adolescent',
      title: '12+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const young = await prisma.dimensionItem.upsert({
    where: { alias: 'young' },
    update: {},
    create: {
      alias: 'young',
      title: '18+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const middle = await prisma.dimensionItem.upsert({
    where: { alias: 'middle' },
    update: {},
    create: {
      alias: 'middle',
      title: '40+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const older = await prisma.dimensionItem.upsert({
    where: { alias: 'older' },
    update: {},
    create: {
      alias: 'older',
      title: '60+',
      dimension: {
        connect: { alias: 'ages' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const oneTime = await prisma.dimensionItem.upsert({
    where: { alias: 'oneTime' },
    update: {},
    create: {
      alias: 'oneTime',
      title: 'разові консультації',
      dimension: {
        connect: { alias: 'terms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const short = await prisma.dimensionItem.upsert({
    where: { alias: 'short' },
    update: {},
    create: {
      alias: 'short',
      title: 'короткотривала психотерапія',
      dimension: {
        connect: { alias: 'terms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const long = await prisma.dimensionItem.upsert({
    where: { alias: 'long' },
    update: {},
    create: {
      alias: 'long',
      title: 'довготривала психотерапія',
      dimension: {
        connect: { alias: 'terms' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const gestalt = await prisma.dimensionItem.upsert({
    where: { alias: 'gestalt' },
    update: {},
    create: {
      alias: 'gestalt',
      title: 'гештальт',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const psychoanalytic = await prisma.dimensionItem.upsert({
    where: { alias: 'psychoanalytic' },
    update: {},
    create: {
      alias: 'psychoanalytic',
      title: 'психоанітична',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const EMDR = await prisma.dimensionItem.upsert({
    where: { alias: 'EMDR' },
    update: {},
    create: {
      alias: 'EMDR',
      title: 'ЕМДР',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const сlientСentered = await prisma.dimensionItem.upsert({
    where: { alias: 'сlientСentered' },
    update: {},
    create: {
      alias: 'сlientСentered',
      title: 'клієнт-центрована',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const positive = await prisma.dimensionItem.upsert({
    where: { alias: 'positive' },
    update: {},
    create: {
      alias: 'positive',
      title: 'позитивна',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const systemicFamily = await prisma.dimensionItem.upsert({
    where: { alias: 'systemicFamily' },
    update: {},
    create: {
      alias: 'systemicFamily',
      title: 'системна сімейна',
      dimension: {
        connect: { alias: 'approaches' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const zero = await prisma.dimensionItem.upsert({
    where: { alias: 'zero' },
    update: {},
    create: {
      alias: 'zero',
      title: '0',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const one = await prisma.dimensionItem.upsert({
    where: { alias: 'one' },
    update: {},
    create: {
      alias: 'one',
      title: '100',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const two = await prisma.dimensionItem.upsert({
    where: { alias: 'two' },
    update: {},
    create: {
      alias: 'two',
      title: '200',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const three = await prisma.dimensionItem.upsert({
    where: { alias: 'three' },
    update: {},
    create: {
      alias: 'three',
      title: '300',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const four = await prisma.dimensionItem.upsert({
    where: { alias: 'four' },
    update: {},
    create: {
      alias: 'four',
      title: '400',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const five = await prisma.dimensionItem.upsert({
    where: { alias: 'five' },
    update: {},
    create: {
      alias: 'five',
      title: '500',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const six = await prisma.dimensionItem.upsert({
    where: { alias: 'six' },
    update: {},
    create: {
      alias: 'six',
      title: '600',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const seven = await prisma.dimensionItem.upsert({
    where: { alias: 'seven' },
    update: {},
    create: {
      alias: 'seven',
      title: '700',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const eight = await prisma.dimensionItem.upsert({
    where: { alias: 'eight' },
    update: {},
    create: {
      alias: 'eight',
      title: '800',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const nine = await prisma.dimensionItem.upsert({
    where: { alias: 'nine' },
    update: {},
    create: {
      alias: 'nine',
      title: '900',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const ten = await prisma.dimensionItem.upsert({
    where: { alias: 'ten' },
    update: {},
    create: {
      alias: 'ten',
      title: '1000',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const eleven = await prisma.dimensionItem.upsert({
    where: { alias: 'eleven ' },
    update: {},
    create: {
      alias: 'eleven ',
      title: '1100',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  const twelve = await prisma.dimensionItem.upsert({
    where: { alias: 'twelve' },
    update: {},
    create: {
      alias: 'twelve',
      title: '1200',
      dimension: {
        connect: { alias: 'rates' },
      },
    },
    include: {
      dimension: true,
    },
  });

  console.log({
    psychologist,
    psychotherapist,
    psychiatrist,
    individual,
    сouples,
    family,
    group,
    preschool,
    school,
    adolescent,
    young,
    middle,
    older,
    oneTime,
    short,
    long,
    gestalt,
    psychoanalytic,
    EMDR,
    сlientСentered,
    positive,
    systemicFamily,
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  });
}
