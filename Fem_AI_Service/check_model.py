import pickle

model = pickle.load(open("femaura_ai_model.pkl", "rb"))
print(type(model))
