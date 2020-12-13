var cards = [
    // handcrafted
    {"word": "ML in PL", "taboo": ["CONFERENCE","WARSAW","SPEAKERS","MIMUW","THE BEST"], "source": "handcrafted"},
    {"word": "BCG GAMMA", "taboo": ["BIG THREE","CONSULTING","ML in PL PARTNER","ŁUKASZ BOLIKOWSKI","MANAGEMENT"], "source": "handcrafted"},
    {"word": "MNIST", "taboo": ["DIGITS","YANN LECUN","HANDWRITING","CLASSIFICATION","DATA"], "source": "handcrafted"},
    {"word": "GRADIENT DESCENT", "taboo": ["OPTIMIZATION","ALGORITHM","MINIMUM","LOSS FUNCTION","MACHINE LEARNING"], "source": "handcrafted"},
    {"word": "GANS", "taboo": ["NEURAL NETWORKS","GAME","IAN GOODFELLOW","MACHINE LEARNING","LATENT SPACE"], "source": "handcrafted"},
    {"word": "NLP", "taboo": ["TEXT","SPEECH","ANSWERING QUESTIONS","ARTIFICIAL INTELLIGENCE","TALKING"], "source": "handcrafted"},
    {"word": "NEURAL NETWORK", "taboo": ["DEEP LEARNING","COMPUTATION","GRADIENT DESCENT","ARTIFICIAL INTELLIGENCE","BRAIN"], "source": "handcrafted"},
    {"word": "ARTIFICIAL INTELLIGENCE", "taboo": ["COMPUTER","ROBOT","SCIENCE","MACHINE LEARNING","DECISIONS"], "source": "handcrafted"},
    {"word": "DATASET", "taboo": ["INFORMATION","RECORDS","MODEL","TRAINING","TEST"], "source": "handcrafted"},
    {"word": "CLASSIFICATION", "taboo": ["PROBLEM","DATA","LABEL","OBSERVATION","MODEL"], "source": "handcrafted"},
    {"word": "TENSORFLOW", "taboo": ["KERAS","PYTHON","GOOGLE","PYTORCH","NEURAL NETWORKS"], "source": "handcrafted"},
    {"word": "NEURIPS", "taboo": ["CONFERENCE","PAPER","MACHINE LEARNING","EVENT","IDEAS"], "source": "handcrafted"},
    {"word": "STATISTICS", "taboo": ["MATHEMATICS","DATA","ANALYSIS","MODEL","DESCRIPTION"], "source": "handcrafted"},
    {"word": "POSTER SESSION", "taboo": ["PRESENTATION","RESEARCH","PAPER","IDEA","CONFERENCE"], "source": "handcrafted"},
    {"word": "ALGORITHM", "taboo": ["COMPUTER","SOLUTION","PROGRAM","METHOD","PROBLEM"], "source": "handcrafted"},
    {"word": "COMPUTER", "taboo": ["DEVICE","DIGITS","CIRCUITS","MACHINE","CALCULATIONS"], "source": "handcrafted"},
    {"word": "PYTHON", "taboo": ["PROGRAMMING LANGUAGE","SOFTWARE","COMPUTER","CODE","SNAKE"], "source": "handcrafted"},
    {"word": "ALAN TURING", "taboo": ["MATHEMATICIAN","COMPUTER","ARTIFICIAL INTELLIGENCE","MACHINE","TEST"], "source": "handcrafted"},
    {"word": "SELF-DRIVING CAR", "taboo": ["AUTONOMUS","COMPUTER","VEHICLE","ARTIFICIAL INTELLIGENCE","CONTROL"], "source": "handcrafted"},
    {"word": "NEURON", "taboo": ["INFORMATION","PROPAGATION","BRAIN","NERVE CELL","NETWORK"], "source": "handcrafted"},
    {"word": "IMAGENET", "taboo": ["DATABASE","OBJECT RECOGNITION","COMPUTER VISION","PICTURE","COLLECTION"], "source": "handcrafted"},
    {"word": "ANNOTATION", "taboo": ["LABEL","DATA","OBJECT","HANDMADE","HUMAN"], "source": "handcrafted"},
    {"word": "FALSE POSITIVE", "taboo": ["ERROR","MISTAKE","TRUE NEGATIVE","ACCURACY","MODEL VALIDATION"], "source": "handcrafted"},
    {"word": "PYTORCH", "taboo": ["FRAMEWORK","TENSORFLOW","KERAS","FACEBOOK","PROGRAMMING"], "source": "handcrafted"},
    {"word": "DROPOUT", "taboo": ["REGULARIZATION","ENSEMBLE","ZERO","RANDOM","NEURAL NETWORKS"], "source": "handcrafted"},
    {"word": "RELU", "taboo": ["PIECEWISE LINEAR","ACTIVATION FUNCTION","ZERO","MAXIMUM","DEEP NEURAL NETWORKS"], "source": "handcrafted"},
    {"word": "GEOFFREY HINTON", "taboo": ["UNIVERSITY OF TORONTO","RMSPROP","CAPSULE NEURAL NETWORKS","DEEP LEARNING","YANN LECUN"], "source": "handcrafted"},
    {"word": "COVARIANCE", "taboo": ["SIMILARITY","EXPECTED VALUE","RADNOM VARIABLES","PROBABILITY","JOINT"], "source": "handcrafted"},
    {"word": "RANDOM FORREST", "taboo": ["TREE","REGRESSION","CLASSIFICATION","FEATURE","DECISION"], "source": "handcrafted"},
    {"word": "REGRESSION", "taboo": ["MODEL","VALUE","CONTINOUS","FEATURE","STATISTICS"], "source": "handcrafted"},
    {"word": "JOSEF SIVIC", "taboo": ["INRIA","VISION","HUMAN","VIDEO","CZECH"], "source": "handcrafted"},
    {"word": "RAZVAN PASCANU", "taboo": ["DEEPMIND","META","THEANO","RNN","ROMANIA"], "source": "handcrafted"},
    {"word": "AGNIESZKA GRABSKA-BARWIŃSKA", "taboo": ["DEEPMIND","NEURO","COGNITIVE","BRAIN","PERCEPTION"], "source": "handcrafted"},
    {"word": "JAKUB TOMCZAK", "taboo": ["QUALCOMM","BAYESIAN","PROBABILISTIC","VARIATIONAL","FLOW"], "source": "handcrafted"},
    {"word": "ŁUKASZ BOLIKOWSKI", "taboo": ["BCG GAMMA","BUSINESS","ICM","DATA SCIENTIST","SPONSOR"], "source": "handcrafted"},
    {"word": "ANTON OSOKIN", "taboo": ["OPTIMIZATION","STRUCTURED","INRIA","MOSCOW","RUSSIA"], "source": "handcrafted"},
    {"word": "GÜL VAROL", "taboo": ["VISION","HUMAN","POSE","ACTION","BODY"], "source": "handcrafted"},
    {"word": "RESNET", "taboo": ["COMPUTER VISION","IMAGENET","SKIP CONNECTIONS","GRADIENT VANISHING","NEURAL NETWORK"], "source": "handcrafted"},
    {"word": "MONTEZUMA REVANGE", "taboo": ["REINFORCEMENT LEARNING","GAME","ATARI","PLANNING","AZTECS"], "source": "handcrafted"},
    {"word": "EPOCH", "taboo": ["OBSERVATION","DATASET","TRAINING","MACHINE LEARNING","TIME"], "source": "handcrafted"},
    {"word": "SIMULATION", "taboo": ["IMITATION","GENERATED","DATA","MODEL","COMPUTER"], "source": "handcrafted"},
    {"word": "ROBOT", "taboo": ["MACHINE","COMPUTER","AUTOMATIC","ACTIONS","TASKS"], "source": "handcrafted"},
    {"word": "SOFTWARE", "taboo": ["COMPUTER","HARDWARE","PROGRAM","APPLICATION","CODE"], "source": "handcrafted"},
    {"word": "EXPLORATION", "taboo": ["ENVIRONMENT","INFORMATION","AGENT","DATA","EXPOTATION"], "source": "handcrafted"},
    {"word": "CHATBOT", "taboo": ["ARTIFICIAL INTELLIGENCE","CONVERSATION","TALKING","TEXT","COMPUTER PROGRAM"], "source": "handcrafted"},
    {"word": "CLUSTERING", "taboo": ["SIMILARITY","FEATURES","DATA","UNSUPERVISED LEARNING","GROUPS"], "source": "handcrafted"},
    {"word": "BAYESIAN NETWORK", "taboo": ["PROBABILITY","UNCERTAINTY","STATISTICAL MODEL","DISTRIBUTION","NODES"], "source": "handcrafted"},
    {"word": "WORD2VEC", "taboo": ["WORD EMBEDDING","TOMAS MIKOLOV","TEXT","NLP","NEURAL NETWORK"], "source": "handcrafted"},
    {"word": "YOUSHUA BENGIO", "taboo": ["MONTREAL","SCIENTIST","DEEP LEARNING","CIFAR","CANADA"], "source": "handcrafted"},
    {"word": "VECTOR", "taboo": ["DIMENSION","NUMBER","LIST","COORDINATE","SPACE"], "source": "handcrafted"},
    {"word": "COMPUTER VISION", "taboo": ["IMAGE RECOGNITION","PICTURE","MACHINE LEARNING","CNNS","OBJECTS"], "source": "handcrafted"},
    {"word": "OUTLIER", "taboo": ["DIFFERENT","ANOMALY","DETECTION","ERROR","RARE"], "source": "handcrafted"},

    // ai generated
    {"word": "SUPERVISED LEARNING", "taboo": ["TRAINING","FUNCTION","ALGORITHM","BIAS VARIANCE","RISK MINIMIZATION"], "source": "generated"},
    {"word": "SPEECH RECOGNITION", "taboo": ["VOICE","SPEAKER","SYSTEM","WORD","SOUND"], "source": "generated"},
    {"word": "CORRELATION DOES NOT IMPLY CAUSATION", "taboo": ["FALLACY","CAUSE EFFECT","CAUSALITY","WINDMILL","EXAMPLE"], "source": "generated"},
    {"word": "WOLFRAM MATHEMATICA", "taboo": ["TOOL","LANGUAGE","DATA","CODE","NOTEBOOK"], "source": "generated"},
    {"word": "OPTICAL CHARACTER RECOGNITION", "taboo": ["FONT","GLYPH","TEXT","IMAGE","DOCUMENT"], "source": "generated"},
    {"word": "QUEUEING THEORY", "taboo": ["CUSTOMER","JOB","SERVICE","NETWORK","NODE"], "source": "generated"},
    {"word": "EXPERIMENT", "taboo": ["RESULT","TREATMENT","HYPOTHESIS","CONTROL","STUDY"], "source": "generated"},
    {"word": "MARKOV CHAIN", "taboo": ["TRANSITION","STATE SPACE","TIME","PROCESS","PROBABILITY"], "source": "generated"},
    {"word": "SUPPORT VECTOR MACHINE", "taboo": ["MARGIN","HYPERPLANE","KERNEL","CLASSIFIER","SVMS"], "source": "generated"},
    {"word": "REINFORCEMENT LEARNING", "taboo": ["POLICY","ACTION VALUE","AGENT","METHOD","STATE ACTION"], "source": "generated"},
    {"word": "NAIVE BAYES CLASSIFIER", "taboo": ["PROBABILITY","FEATURE","DOCUMENT","EVENT MODEL","CLASSIFICATION"], "source": "generated"},
    {"word": "LINEAR CLASSIFIER", "taboo": ["TRAINING","VECTOR","LOSS","OUTPUT","FUNCTION"], "source": "generated"},
    {"word": "PATTERN RECOGNITION", "taboo": ["LABEL","ALGORITHM","FEATURE","DATA","OUTPUT"], "source": "generated"},
    {"word": "PERCEPTRON", "taboo": ["WEIGHT","ALGORITHM","LAYER","INPUT VECTOR","TRAINING"], "source": "generated"},
    {"word": "OVERFITTING", "taboo": ["MODEL","DATA","FUNCTION","REGRESSION","PARAMETER"], "source": "generated"},
    {"word": "HANDWRITING RECOGNITION", "taboo": ["CHARACTER","PDA","SYSTEM","LINE","TABLET"], "source": "generated"},
    {"word": "EARLY STOPPING", "taboo": ["VALIDATION","REGULARIZATION","TRAINING","ITERATION","LEARNER"], "source": "generated"},
    {"word": "MACHINE LEARNING", "taboo": ["DATA","MODEL","TRAINING","BIAS","ALGORITHM"], "source": "generated"},
    {"word": "FEATURE EXTRACTION", "taboo": ["DETECTION","DIMENSIONALITY REDUCTION","ANALYSIS","IMAGE","DATA"], "source": "generated"},
    {"word": "TEXT MINING", "taboo": ["ANALYSIS","ANALYTICS","COPYRIGHT","BUSINESS","DOCUMENT"], "source": "generated"},
    {"word": "QUESTION ANSWERING", "taboo": ["QA SYSTEM","ANSWER TYPE","DOMAIN","DOCUMENT","KNOWLEDGE"], "source": "generated"},
    {"word": "R PROGRAMMING LANGUAGE", "taboo": ["PACKAGE","USER","CRAN","DATA","SOFTWARE"], "source": "generated"},
    {"word": "TIME SERIES", "taboo": ["ANALYSIS","DATA","CHART","INTERPOLATION","MODEL"], "source": "generated"},
    {"word": "LOSS FUNCTION", "taboo": ["DECISION RULE","VALUE","FREQUENTIST","RISK","UTILITY"], "source": "generated"},
    {"word": "DIMENSIONALITY REDUCTION", "taboo": ["SPACE","KERNEL","DATA","TECHNIQUE","NMF"], "source": "generated"},
    {"word": "FACIAL RECOGNITION SYSTEM", "taboo": ["FACE","PRIVACY","TECHNOLOGY","POLICE","IMAGE"], "source": "generated"},
    {"word": "PART-OF-SPEECH TAGGING", "taboo": ["WORD","CORPUS","PO TAGGER","VERB","NOUN"], "source": "generated"},
    {"word": "CURSE OF DIMENSIONALITY", "taboo": ["HYPERCUBE","DISTANCE FUNCTION","DATA","SPACE","NEIGHBOR"], "source": "generated"},
    {"word": "N-GRAM", "taboo": ["SEQUENCE","LANGUAGE MODEL","PROBABILITY WORD","LETTER","SERVE"], "source": "generated"},
    {"word": "Q-LEARNING", "taboo": ["REWARD","ACTION","STATE","VALUE","REINFORCEMENT"], "source": "generated"},
    {"word": "BACKPROPAGATION", "taboo": ["OUTPUT","WEIGHT","ERROR","NETWORK","NEURON"], "source": "generated"},
    {"word": "STATISTICAL CLASSIFICATION", "taboo": ["CLASSIFIER","OBSERVATION","CATEGORY","INSTANCE","PROCEDURE"], "source": "generated"},
    {"word": "CROSS ENTROPY", "taboo": ["DISTRIBUTION","DIVERGENCE","SET","PROBABILITY OUTCOME","LIKELIHOOD"], "source": "generated"},
    {"word": "MULTI-ARMED BANDIT", "taboo": ["REWARD","STRATEGY","LEVER","EXPLOITATION","PROBLEM"], "source": "generated"},
    {"word": "PERPLEXITY", "taboo": ["TEST SAMPLE","BIT","PROBABILITY","WORD","DISTRIBUTION"], "source": "generated"},
    {"word": "SOFTMAX FUNCTION", "taboo": ["VALUE","SIGMOID","INPUT","TEMPERATURE","PROBABILITY"], "source": "generated"},
    {"word": "AUTOENCODER", "taboo": ["LAYER","INPUT","REPRESENTATION","ACTIVATION","PRETRAINING"], "source": "generated"},
    {"word": "IRIS FLOWER DATA SET", "taboo": ["SPECIE","VIRGINICA VERSICOLOR","FISHER","LENGTH WIDTH","NODE"], "source": "generated"},
    {"word": "LONG SHORT-TERM MEMORY", "taboo": ["UNIT","CELL","FORGET GATE","INPUT GATE","LSTM NETWORK"], "source": "generated"},
    {"word": "BAG-OF-WORDS MODEL", "taboo": ["DOCUMENT","TERM FREQUENCY","TEXT","REPRESENTATION","SPAM"], "source": "generated"},
    {"word": "ANDREW NG", "taboo": ["STANFORD","COURSERA","HELICOPTER","STUDENT","GOOGLE BRAIN"], "source": "generated"},
    {"word": "PAGERANK", "taboo": ["GOOGLE","LINK PAGE","PATENT","SEARCH","SURFER"], "source": "generated"},
    {"word": "KAGGLE", "taboo": ["DATA SCIENCE","MACHINE COMPETITION","COMMUNITY","DATA SCIENTIST","MARCH"], "source": "generated"},
    {"word": "CONVOLUTIONAL NEURAL NETWORK", "taboo": ["LAYER","NEURON","IMAGE","CNNS","INPUT"], "source": "generated"},
    {"word": "GOOGLE BRAIN", "taboo": ["TEAM","RESOLUTION PICTURE","NETWORK","SYSTEM","ENCRYPTION"], "source": "generated"},
    {"word": "DEEPMIND", "taboo": ["GAME","GOOGLE","COMPANY","HOSPITAL","AI"], "source": "generated"},
    {"word": "WORD EMBEDDING", "taboo": ["EMBEDDINGS","VECTOR SPACE","REPRESENTATION","SEQUENCE","FASTTEXT"], "source": "generated"},
    {"word": "DEEPDREAM", "taboo": ["IMAGE","NETWORK","TEXTURE","MORDVINTSEV","USAGE ACTIVITY"], "source": "generated"},
    {"word": "ALPHAGO", "taboo": ["GAME","PLAYER","MATCH","MOVE","LEE"], "source": "generated"},
    {"word": "PRISMA APP", "taboo": ["MOISEENKOV","JULY","STYLE TRANSFER","STORE","DOWNLOADS"], "source": "generated"},
    {"word": "KERAS", "taboo": ["CHOLLET","BACKEND","HOST TOOL IMAGE","STANDALONE MACHINE LEARNING","FRAMEWORK LEVEL SET"], "source": "generated"},
    {"word": "OPENAI FIVE", "taboo": ["GAME","BOT","ACTION","PLAYER","DOTA"], "source": "generated"},
];